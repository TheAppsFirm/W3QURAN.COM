/**
 * Send Email API — uses Resend
 * POST /api/send-email
 *
 * Supports: single email, admin notifications, user notifications
 * Templates: welcome, birthday, notification, admin-alert
 */

// Email templates — clean, respectful Islamic design
const TEMPLATES = {
  // Admin alert (e.g. new user signup, error, payment)
  'admin-alert': ({ subject, body, details }) => ({
    subject: `[w3Quran Admin] ${subject}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #E2E8F0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #14B8A6, #0D9488); padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 20px; color: white;">w3Quran Admin</h1>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #5EEAD4; font-size: 18px; margin: 0 0 12px;">${subject}</h2>
          <p style="color: #CBD5E1; line-height: 1.6; margin: 0 0 16px;">${body}</p>
          ${details ? `<div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; font-size: 14px; color: #94A3B8;"><pre style="margin: 0; white-space: pre-wrap;">${typeof details === 'string' ? details : JSON.stringify(details, null, 2)}</pre></div>` : ''}
        </div>
        <div style="padding: 16px 24px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <p style="color: #64748B; font-size: 12px; margin: 0;">w3Quran — The Beautiful Quran App</p>
        </div>
      </div>
    `,
  }),

  // Welcome email for new users
  'welcome': ({ name }) => ({
    subject: 'Welcome to w3Quran — Your Quran Journey Begins',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #E2E8F0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #14B8A6, #0D9488); padding: 32px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: white;">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>
        <div style="padding: 32px 24px;">
          <h2 style="color: #5EEAD4; font-size: 20px; margin: 0 0 16px;">Assalamu Alaikum${name ? `, ${name}` : ''}!</h2>
          <p style="color: #CBD5E1; line-height: 1.7; margin: 0 0 16px;">Welcome to w3Quran. We're honored to be part of your Quran journey.</p>
          <p style="color: #CBD5E1; line-height: 1.7; margin: 0 0 24px;">Explore beautiful bubble visualizations, word-by-word learning, AI-powered conversations with the Quran, and much more.</p>
          <div style="text-align: center;">
            <a href="https://w3quran.com" style="display: inline-block; background: linear-gradient(135deg, #14B8A6, #0D9488); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">Start Reading</a>
          </div>
        </div>
        <div style="padding: 16px 24px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <p style="color: #64748B; font-size: 12px; margin: 0;">May Allah bless your journey with the Quran.</p>
          <p style="color: #475569; font-size: 11px; margin: 8px 0 0;">w3Quran — <a href="https://w3quran.com" style="color: #14B8A6; text-decoration: none;">w3quran.com</a></p>
        </div>
      </div>
    `,
  }),

  // Birthday greeting
  'birthday': ({ name }) => ({
    subject: 'Happy Birthday — A Special Dua from w3Quran',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #E2E8F0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #8B5CF6, #EC4899); padding: 32px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: white;">Happy Birthday${name ? `, ${name}` : ''}!</h1>
        </div>
        <div style="padding: 32px 24px; text-align: center;">
          <p style="color: #CBD5E1; line-height: 1.7; font-size: 16px; margin: 0 0 24px;">May Allah bless you with a long life filled with health, happiness, and closeness to the Quran.</p>
          <div style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.2); border-radius: 12px; padding: 24px; margin: 0 0 24px;">
            <p style="color: #C4B5FD; font-size: 20px; line-height: 1.6; margin: 0; font-family: 'Scheherazade New', serif;">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً</p>
            <p style="color: #94A3B8; font-size: 13px; margin: 12px 0 0;">"Our Lord, give us good in this world and good in the Hereafter" (2:201)</p>
          </div>
          <a href="https://w3quran.com" style="display: inline-block; background: linear-gradient(135deg, #8B5CF6, #EC4899); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600;">Read Quran Today</a>
        </div>
        <div style="padding: 16px 24px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <p style="color: #475569; font-size: 11px; margin: 0;">w3Quran — <a href="https://w3quran.com" style="color: #14B8A6; text-decoration: none;">w3quran.com</a></p>
        </div>
      </div>
    `,
  }),

  // General notification
  'notification': ({ subject, body, ctaText, ctaUrl }) => ({
    subject: subject || 'Update from w3Quran',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #E2E8F0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #14B8A6, #0D9488); padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 20px; color: white;">w3Quran</h1>
        </div>
        <div style="padding: 32px 24px;">
          ${subject ? `<h2 style="color: #5EEAD4; font-size: 18px; margin: 0 0 12px;">${subject}</h2>` : ''}
          <p style="color: #CBD5E1; line-height: 1.7; margin: 0 0 24px;">${body}</p>
          ${ctaText && ctaUrl ? `<div style="text-align: center;"><a href="${ctaUrl}" style="display: inline-block; background: linear-gradient(135deg, #14B8A6, #0D9488); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600;">${ctaText}</a></div>` : ''}
        </div>
        <div style="padding: 16px 24px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <p style="color: #475569; font-size: 11px; margin: 0;">w3Quran — <a href="https://w3quran.com" style="color: #14B8A6; text-decoration: none;">w3quran.com</a></p>
        </div>
      </div>
    `,
  }),
};

// Helper to verify admin session
async function verifyAdmin(request, env) {
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
  const sessionToken = sessionMatch?.[1];
  if (!sessionToken) return null;

  const result = await env.DB.prepare(`
    SELECT s.user_id, u.email, u.name
    FROM sessions s JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();

  if (!result) return null;

  const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());
  if (!adminEmails.includes(result.email.toLowerCase())) return null;

  return result;
}

// Core send function — reusable
// triggeredBy: 'admin' (manual from dashboard) or 'system' (auto welcome, etc.)
async function sendEmail(env, { to, template, data, subject, html, triggeredBy = 'admin' }) {
  if (!env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured');
  }

  let emailSubject = subject;
  let emailHtml = html;

  // Use template if provided
  if (template && TEMPLATES[template]) {
    const rendered = TEMPLATES[template](data || {});
    emailSubject = emailSubject || rendered.subject;
    emailHtml = emailHtml || rendered.html;
  }

  if (!emailSubject || !emailHtml) {
    throw new Error('Subject and HTML body are required');
  }

  const fromEmail = env.ADMIN_EMAIL || 'admin@w3quran.com';
  const recipients = Array.isArray(to) ? to : [to];

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `w3Quran <${fromEmail}>`,
      to: recipients,
      subject: emailSubject,
      html: emailHtml,
    }),
  });

  const result = await response.json();

  // Log to D1 (non-blocking — don't let logging failure break email)
  if (env.DB) {
    try {
      await env.DB.prepare(`
        INSERT INTO email_logs (to_email, template, subject, status, resend_id, error, triggered_by)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(
        recipients.join(', '),
        template || null,
        emailSubject,
        response.ok ? 'sent' : 'failed',
        result.id || null,
        response.ok ? null : (result.message || 'Unknown error'),
        triggeredBy
      ).run();
    } catch (logErr) {
      console.error('[Email] Failed to log email:', logErr.message);
    }
  }

  if (!response.ok) {
    console.error('[Email] Send failed:', result);
    throw new Error(result.message || 'Failed to send email');
  }

  return result;
}

// API endpoint
export async function onRequest(context) {
  const { env, request } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
  }

  // Admin only
  const admin = await verifyAdmin(request, env);
  if (!admin) {
    return new Response(JSON.stringify({ error: 'Admin access required' }), { status: 403, headers: corsHeaders });
  }

  try {
    const body = await request.json();
    const { to, template, data, subject, html } = body;

    if (!to) {
      return new Response(JSON.stringify({ error: 'Recipient (to) is required' }), { status: 400, headers: corsHeaders });
    }

    const result = await sendEmail(env, { to, template, data, subject, html });

    return new Response(JSON.stringify({
      success: true,
      messageId: result.id,
    }), { status: 200, headers: corsHeaders });

  } catch (error) {
    console.error('[Email] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Failed to send email',
    }), { status: 500, headers: corsHeaders });
  }
}

// Export sendEmail for use in other Workers
export { sendEmail, TEMPLATES };
