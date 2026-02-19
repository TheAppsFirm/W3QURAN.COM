/**
 * Talk to Quran - AI Chat API
 * Uses OpenAI GPT-4o for Quranic Q&A with strict guidelines
 *
 * Cost per query: ~$0.05 (GPT input + output + TTS)
 * 1 Credit = 1 query
 */

// Subscription tier credit allowances
const TIER_CREDITS = {
  free: 3, // one-time welcome bonus
  starter: 30, // per month
  premium: 80, // per month
  scholar: 300, // per month
  lifetime: 100, // per month forever
};

// System prompt with strict Quran-only guidelines
const SYSTEM_PROMPT = `You are a Quran Knowledge Assistant for w3Quran app. Your ONLY purpose is to help users understand the Quran.

STRICT RULES - YOU MUST FOLLOW:
1. ONLY quote and explain Quranic verses - NEVER add personal opinions or interpretations
2. NEVER reference Hadith, scholars, or any source outside the Quran
3. ALWAYS cite exact verse references as (Surah:Ayah) format
4. If a topic is NOT directly addressed in the Quran, respond: "I could not find direct Quranic verses on this specific topic. The Quran may address related themes that could be helpful."
5. Keep responses concise but complete (max 3-5 verses per response)
6. For Arabic verses, provide the Arabic text followed by translation
7. Be respectful and educational in tone
8. Support questions in English, Urdu, and Arabic - respond in the same language

RESPONSE FORMAT:
- Start with a brief introduction to the topic
- Quote relevant verses with Arabic + translation
- Each verse should be on its own line with reference
- End with a brief summary connecting the verses

EXAMPLE RESPONSE:
"Regarding patience (Sabr), the Quran emphasizes its importance in many verses:

📖 Surah Al-Baqarah (2:153):
يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ
"O you who believe, seek help through patience and prayer..."

📖 Surah Al-Imran (3:200):
يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا
"O you who believe, be patient and endure..."

These verses teach us that patience is a fundamental quality for believers, connected with prayer as a source of strength."

Remember: You represent the Quran's teachings - be accurate, respectful, and helpful.`;

// Helper to verify user session
async function verifySession(request, env) {
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
  const sessionToken = sessionMatch?.[1];

  if (!sessionToken) {
    return null;
  }

  const result = await env.DB.prepare(`
    SELECT s.user_id, u.email, u.name
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();

  return result;
}

// Get or create user credits record
async function getUserCredits(env, userId) {
  let credits = await env.DB.prepare(`
    SELECT * FROM user_credits WHERE user_id = ?
  `).bind(userId).first();

  if (!credits) {
    // Create new credits record with free tier
    const id = `cred_${userId}`;
    await env.DB.prepare(`
      INSERT INTO user_credits (user_id, credits_balance, credits_monthly_allowance, subscription_tier, free_credits_claimed)
      VALUES (?, 0, 0, 'free', FALSE)
    `).bind(userId).run();

    credits = await env.DB.prepare(`
      SELECT * FROM user_credits WHERE user_id = ?
    `).bind(userId).first();
  }

  return credits;
}

// Check and reset monthly credits if needed
async function checkMonthlyReset(env, userId, credits) {
  const today = new Date().toISOString().split('T')[0];
  const resetDate = credits.credits_reset_date;

  // Check if we need to reset (new month or no reset date)
  if (!resetDate || resetDate < today) {
    // Calculate next reset date (1st of next month)
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const nextResetDate = nextMonth.toISOString().split('T')[0];

    // Reset monthly credits
    await env.DB.prepare(`
      UPDATE user_credits
      SET credits_balance = credits_monthly_allowance,
          credits_used_this_month = 0,
          credits_reset_date = ?,
          updated_at = datetime('now')
      WHERE user_id = ?
    `).bind(nextResetDate, userId).run();

    // Log the reset
    const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await env.DB.prepare(`
      INSERT INTO credit_transactions (id, user_id, type, amount, description)
      VALUES (?, ?, 'monthly_reset', ?, 'Monthly credits reset')
    `).bind(txId, userId, credits.credits_monthly_allowance).run();

    // Return updated credits
    return await getUserCredits(env, userId);
  }

  return credits;
}

// Deduct a credit
async function useCredit(env, userId) {
  await env.DB.prepare(`
    UPDATE user_credits
    SET credits_balance = credits_balance - 1,
        credits_used_this_month = credits_used_this_month + 1,
        updated_at = datetime('now')
    WHERE user_id = ?
  `).bind(userId).run();

  // Log transaction
  const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  await env.DB.prepare(`
    INSERT INTO credit_transactions (id, user_id, type, amount, description)
    VALUES (?, ?, 'use', -1, 'Talk to Quran query')
  `).bind(txId, userId).run();
}

// Call OpenAI API
async function callOpenAI(env, message, conversationHistory = []) {
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory.slice(-6), // Keep last 6 messages for context
    { role: 'user', content: message }
  ];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages,
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('[OpenAI] Error:', error);
    throw new Error('Failed to get AI response');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Generate TTS audio using OpenAI
async function generateTTS(env, text) {
  // Skip TTS for very long responses
  if (text.length > 2000) {
    return null;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: 'alloy', // Options: alloy, echo, fable, onyx, nova, shimmer
      }),
    });

    if (!response.ok) {
      console.error('[TTS] Error:', await response.text());
      return null;
    }

    const audioBuffer = await response.arrayBuffer();
    const base64Audio = btoa(String.fromCharCode(...new Uint8Array(audioBuffer)));
    return `data:audio/mpeg;base64,${base64Audio}`;
  } catch (error) {
    console.error('[TTS] Error:', error);
    return null;
  }
}

// Extract verse references from response
function extractVerseReferences(text) {
  const pattern = /\((\d+):(\d+)\)/g;
  const verses = [];
  let match;
  while ((match = pattern.exec(text)) !== null) {
    verses.push({ surah: parseInt(match[1]), ayah: parseInt(match[2]) });
  }
  return verses;
}

export async function onRequest(context) {
  const { env, request } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST for chat
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    // Verify user is logged in
    const user = await verifySession(request, env);
    if (!user) {
      return new Response(JSON.stringify({
        error: 'Authentication required',
        code: 'AUTH_REQUIRED'
      }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    const { message, conversationHistory = [], language = 'en', includeTTS = false } = await request.json();

    if (!message || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Get user credits
    let credits = await getUserCredits(env, user.user_id);

    // Check for monthly reset
    credits = await checkMonthlyReset(env, user.user_id, credits);

    // Claim free credits for new users
    if (!credits.free_credits_claimed && credits.subscription_tier === 'free') {
      await env.DB.prepare(`
        UPDATE user_credits
        SET credits_balance = credits_balance + 3,
            free_credits_claimed = TRUE,
            updated_at = datetime('now')
        WHERE user_id = ?
      `).bind(user.user_id).run();

      // Log transaction
      const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      await env.DB.prepare(`
        INSERT INTO credit_transactions (id, user_id, type, amount, description)
        VALUES (?, ?, 'free_gift', 3, 'Welcome bonus - 3 free credits')
      `).bind(txId, user.user_id).run();

      credits.credits_balance += 3;
      credits.free_credits_claimed = true;
    }

    // Check if user has credits
    if (credits.credits_balance <= 0) {
      return new Response(JSON.stringify({
        error: 'No credits remaining',
        code: 'NO_CREDITS',
        subscription_tier: credits.subscription_tier,
        credits_balance: 0,
      }), {
        status: 402,
        headers: corsHeaders,
      });
    }

    // Call OpenAI
    const aiResponse = await callOpenAI(env, message, conversationHistory);

    // Deduct credit
    await useCredit(env, user.user_id);

    // Extract verse references
    const versesCited = extractVerseReferences(aiResponse);

    // Generate TTS if requested
    let audioUrl = null;
    if (includeTTS) {
      audioUrl = await generateTTS(env, aiResponse);
    }

    // Save conversation
    const convId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await env.DB.prepare(`
      INSERT INTO quran_conversations (id, user_id, message, response, verses_cited, language)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(
      convId,
      user.user_id,
      message,
      aiResponse,
      JSON.stringify(versesCited),
      language
    ).run();

    // Get updated credits
    const updatedCredits = await getUserCredits(env, user.user_id);

    return new Response(JSON.stringify({
      success: true,
      response: aiResponse,
      versesCited,
      audioUrl,
      credits: {
        balance: updatedCredits.credits_balance,
        tier: updatedCredits.subscription_tier,
        usedThisMonth: updatedCredits.credits_used_this_month,
        monthlyAllowance: updatedCredits.credits_monthly_allowance,
      },
      conversationId: convId,
    }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[QuranChat] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to process request',
      details: error.message
    }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
