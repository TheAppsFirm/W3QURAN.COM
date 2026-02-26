/**
 * Talk to Quran - AI Chat API
 * Uses OpenAI GPT-4o for Quranic Q&A with strict guidelines
 *
 * Cost per query: ~$0.05 (GPT input + output + TTS)
 * 1 Credit = 1 query
 *
 * Access tiers:
 * - Admin: Unlimited (no credit deduction)
 * - Paid: Based on subscription credits
 * - Free: 5 queries per day
 */

// Subscription tier credit allowances
const TIER_CREDITS = {
  free: 0, // free users get 5 per day, not credits
  starter: 30, // per month
  premium: 80, // per month
  scholar: 300, // per month
  lifetime: 100, // per month forever
};

// Free tier daily limit
const FREE_DAILY_LIMIT = 5;

// Helper to get admin emails from environment
const getAdminEmails = (env) => {
  const emails = env.ADMIN_EMAILS || '';
  if (!emails) return [];
  return emails.split(',').map(e => e.trim().toLowerCase());
};

// Check if user is admin
const isAdminUser = (email, env) => {
  if (!email) return false;
  const adminEmails = getAdminEmails(env);
  return adminEmails.includes(email.toLowerCase());
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

  // Only reset for users with monthly allowance (paid subscribers)
  // Free users keep their purchased credits
  if (credits.credits_monthly_allowance <= 0) {
    return credits;
  }

  // Check if we need to reset (new month or no reset date)
  if (!resetDate || resetDate < today) {
    // Calculate next reset date (1st of next month)
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const nextResetDate = nextMonth.toISOString().split('T')[0];

    // Reset monthly credits (add monthly allowance, don't overwrite purchased credits)
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

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

// Get free user daily usage
async function getFreeDailyUsage(env, userId) {
  const today = getTodayDate();

  // Check if there's a daily usage record for today
  const usage = await env.DB.prepare(`
    SELECT * FROM free_daily_usage
    WHERE user_id = ? AND usage_date = ?
  `).bind(userId, today).first();

  if (!usage) {
    return { count: 0, remaining: FREE_DAILY_LIMIT };
  }

  return {
    count: usage.query_count,
    remaining: Math.max(0, FREE_DAILY_LIMIT - usage.query_count)
  };
}

// Increment free user daily usage
async function incrementFreeDailyUsage(env, userId) {
  const today = getTodayDate();

  // Try to update existing record
  const result = await env.DB.prepare(`
    UPDATE free_daily_usage
    SET query_count = query_count + 1, updated_at = datetime('now')
    WHERE user_id = ? AND usage_date = ?
  `).bind(userId, today).run();

  // If no record existed, create one
  if (result.changes === 0) {
    await env.DB.prepare(`
      INSERT INTO free_daily_usage (user_id, usage_date, query_count)
      VALUES (?, ?, 1)
    `).bind(userId, today).run();
  }
}

// Call OpenAI API - optimized for speed
async function callOpenAI(env, message, conversationHistory = []) {
  // Validate API key exists
  if (!env.OPENAI_API_KEY) {
    console.error('[OpenAI] Missing OPENAI_API_KEY');
    throw new Error('OpenAI API key not configured');
  }

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory.slice(-4), // Reduced context for speed
    { role: 'user', content: message }
  ];

  let response;
  try {
    response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Much faster than gpt-4o, still high quality
        messages,
        max_tokens: 600, // Reduced for faster response
        temperature: 0.6, // Slightly lower for more focused responses
      }),
    });
  } catch (fetchError) {
    console.error('[OpenAI] Network error:', fetchError);
    throw new Error(`Network error connecting to OpenAI: ${fetchError.message}`);
  }

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error');
    console.error('[OpenAI] API Error:', response.status, errorText);

    // Parse error for better messages
    let errorMessage = 'Failed to get AI response';
    try {
      const errorJson = JSON.parse(errorText);
      if (errorJson.error?.message) {
        errorMessage = errorJson.error.message;
      }
    } catch {
      // Use status code based messages
      if (response.status === 401) {
        errorMessage = 'Invalid OpenAI API key';
      } else if (response.status === 429) {
        errorMessage = 'Rate limit exceeded. Please try again in a moment.';
      } else if (response.status === 500 || response.status === 503) {
        errorMessage = 'OpenAI service temporarily unavailable';
      }
    }

    throw new Error(errorMessage);
  }

  let data;
  try {
    data = await response.json();
  } catch (jsonError) {
    console.error('[OpenAI] JSON parse error:', jsonError);
    throw new Error('Invalid response from OpenAI');
  }

  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    console.error('[OpenAI] Unexpected response format:', data);
    throw new Error('Unexpected response format from OpenAI');
  }

  return data.choices[0].message.content;
}

// Voice settings for different languages
// OpenAI TTS voices: alloy, echo, fable, onyx, nova, shimmer
// onyx = deep male, nova = warm female, echo = warm male
const VOICE_SETTINGS = {
  en: { voice: 'onyx', speed: 1.0 },    // Deep male for English
  ur: { voice: 'echo', speed: 0.95 },   // Warm male, slightly slower for Urdu
  ar: { voice: 'echo', speed: 0.9 },    // Warm male, slower for Arabic clarity
};

// Generate TTS audio using OpenAI HD for high-quality voice
async function generateTTS(env, text, language = 'en') {
  // Skip TTS for very long responses
  if (text.length > 1500) {
    return null;
  }

  // Get voice settings for language
  const settings = VOICE_SETTINGS[language] || VOICE_SETTINGS.en;

  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1-hd', // HD model for better quality
        input: text.substring(0, 1500),
        voice: settings.voice,
        speed: settings.speed,
      }),
    });

    if (!response.ok) {
      console.error('[TTS] Error:', await response.text());
      return null;
    }

    const audioBuffer = await response.arrayBuffer();
    // Convert to base64 safely (avoid stack overflow with large buffers)
    const uint8Array = new Uint8Array(audioBuffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    const base64Audio = btoa(binary);
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

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: corsHeaders });
  }

  try {
    // Verify user is logged in
    let user;
    try {
      user = await verifySession(request, env);
    } catch (sessionError) {
      console.error('[QuranChat] Session verification error:', sessionError);
      return new Response(JSON.stringify({
        error: 'Session verification failed',
        code: 'SESSION_ERROR',
      }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    if (!user) {
      return new Response(JSON.stringify({
        error: 'Authentication required',
        code: 'AUTH_REQUIRED'
      }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('[QuranChat] JSON parse error:', parseError);
      return new Response(JSON.stringify({
        error: 'Invalid request body',
        code: 'PARSE_ERROR',
      }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const { message, conversationHistory = [], language = 'en', includeTTS = false, voiceLanguage } = body;
    const ttsLanguage = voiceLanguage || language; // Use voiceLanguage if provided, otherwise use language

    if (message?.length > 5000) {
      return new Response(JSON.stringify({ error: 'Message too long', code: 'MESSAGE_TOO_LONG' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    if (!message || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Check if user is admin - unlimited access
    const isAdmin = isAdminUser(user.email, env);

    // Get user credits
    let credits;
    try {
      credits = await getUserCredits(env, user.user_id);
    } catch (creditsError) {
      console.error('[QuranChat] Credits fetch error:', creditsError);
      return new Response(JSON.stringify({
        error: 'Failed to fetch user credits',
        code: 'CREDITS_ERROR',
      }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    // Check for monthly reset (only for paid users)
    try {
      credits = await checkMonthlyReset(env, user.user_id, credits);
    } catch (resetError) {
      console.error('[QuranChat] Monthly reset error:', resetError);
      // Non-fatal, continue with existing credits
    }

    // Determine access level and check limits
    let accessType = 'paid'; // 'admin' or 'paid'

    if (isAdmin) {
      // Admin: unlimited access
      accessType = 'admin';
    } else if (credits.subscription_tier === 'free' && credits.credits_balance <= 0) {
      // Free user with no credits: NO ACCESS - must upgrade or have admin-granted credits
      return new Response(JSON.stringify({
        error: 'Talk to Quran is a premium feature. Please upgrade to access AI-powered Quranic conversations.',
        code: 'PREMIUM_REQUIRED',
        subscription_tier: 'free',
      }), {
        status: 402,
        headers: corsHeaders,
      });
    } else if (credits.credits_balance <= 0) {
      // Paid user with no credits remaining
      return new Response(JSON.stringify({
        error: 'No credits remaining. Please wait for monthly reset or purchase more credits.',
        code: 'NO_CREDITS',
        subscription_tier: credits.subscription_tier,
        credits_balance: 0,
      }), {
        status: 402,
        headers: corsHeaders,
      });
    } else {
      // User has credits (paid tier OR free with admin-granted credits)
      accessType = 'paid';
    }

    // Call OpenAI
    let aiResponse;
    try {
      aiResponse = await callOpenAI(env, message, conversationHistory);
    } catch (openAIError) {
      console.error('[QuranChat] OpenAI API error:', openAIError);
      return new Response(JSON.stringify({
        error: 'AI service temporarily unavailable',
        code: 'OPENAI_ERROR',
      }), {
        status: 503,
        headers: corsHeaders,
      });
    }

    // Deduct credit for paid users (admin gets free access)
    if (accessType === 'paid') {
      try {
        await useCredit(env, user.user_id);
      } catch (creditError) {
        console.error('[QuranChat] Credit deduction error:', creditError);
        // Non-fatal, already got response
      }
    }
    // Admin: no deduction

    // Extract verse references
    const versesCited = extractVerseReferences(aiResponse);

    // Generate TTS if requested (with language-specific voice)
    let audioUrl = null;
    if (includeTTS) {
      audioUrl = await generateTTS(env, aiResponse, ttsLanguage);
    }

    // Save conversation
    const convId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    try {
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
    } catch (saveError) {
      console.error('[QuranChat] Conversation save error:', saveError);
      // Non-fatal, continue with response
    }

    // Get updated credits/usage
    let updatedCredits;
    try {
      updatedCredits = await getUserCredits(env, user.user_id);
    } catch (creditsUpdateError) {
      console.error('[QuranChat] Failed to fetch updated credits:', creditsUpdateError);
      updatedCredits = credits; // fallback to pre-deduction credits
    }

    // Build response based on access type
    let creditsResponse;
    if (accessType === 'admin') {
      creditsResponse = {
        balance: '∞',
        tier: 'admin',
        unlimited: true,
      };
    } else {
      // Paid user
      creditsResponse = {
        balance: updatedCredits.credits_balance,
        tier: updatedCredits.subscription_tier,
        usedThisMonth: updatedCredits.credits_used_this_month,
        monthlyAllowance: updatedCredits.credits_monthly_allowance,
      };
    }

    return new Response(JSON.stringify({
      success: true,
      response: aiResponse,
      versesCited,
      audioUrl,
      credits: creditsResponse,
      accessType,
      conversationId: convId,
    }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[QuranChat] Unhandled error:', error);

    // Provide user-friendly error messages based on error type
    let userMessage = 'Something went wrong. Please try again.';
    let errorCode = 'UNKNOWN_ERROR';

    if (error.message?.includes('OpenAI')) {
      userMessage = 'AI service is temporarily unavailable. Please try again.';
      errorCode = 'AI_SERVICE_ERROR';
    } else if (error.message?.includes('network') || error.message?.includes('Network')) {
      userMessage = 'Network error. Please check your connection.';
      errorCode = 'NETWORK_ERROR';
    } else if (error.message?.includes('database') || error.message?.includes('DB')) {
      userMessage = 'Database error. Please try again.';
      errorCode = 'DATABASE_ERROR';
    }

    return new Response(JSON.stringify({
      error: userMessage,
      code: errorCode,
    }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
