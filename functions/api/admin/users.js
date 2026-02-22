/**
 * Admin API - User Management
 * List all users and their subscription status
 */

export async function onRequest(context) {
  const { env, request } = context;

  // Get session token from cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, ...val] = c.trim().split('=');
      return [key, val.join('=')];
    })
  );

  const sessionToken = cookies['w3quran_session'];

  if (!sessionToken) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get current user and verify admin status
    const currentUser = await env.DB.prepare(`
      SELECT u.email
      FROM sessions sess
      JOIN users u ON sess.user_id = u.id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!currentUser) {
      return new Response(JSON.stringify({ error: 'Invalid session' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if admin
    const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    if (!adminEmails.includes(currentUser.email?.toLowerCase())) {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET - List all users with filtering and pagination
    if (request.method === 'GET') {
      const url = new URL(request.url);
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
      const offset = (page - 1) * limit;
      const searchTerm = url.searchParams.get('search') || '';
      const tierFilter = url.searchParams.get('tier') || '';

      // Build WHERE clause
      const conditions = [];
      const bindings = [];

      if (searchTerm) {
        conditions.push('(u.email LIKE ? OR u.name LIKE ?)');
        bindings.push(`%${searchTerm}%`, `%${searchTerm}%`);
      }

      if (tierFilter) {
        conditions.push('COALESCE(uc.subscription_tier, ?) = ?');
        bindings.push('free', tierFilter);
      }

      const whereClause = conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : '';

      // Get total count for pagination
      const countQuery = await env.DB.prepare(`
        SELECT COUNT(*) as count
        FROM users u
        LEFT JOIN user_credits uc ON u.id = uc.user_id
        ${whereClause}
      `).bind(...bindings).first();

      const total = countQuery?.count || 0;
      const totalPages = Math.ceil(total / limit);

      // Get paginated users (with fallback for DBs without blocked columns)
      let users;
      let hasBlockedColumn = true;
      try {
        users = await env.DB.prepare(`
          SELECT
            u.id,
            u.email,
            u.name,
            u.picture,
            u.created_at,
            u.blocked,
            u.blocked_reason,
            s.plan,
            s.status as subscription_status,
            s.current_period_end,
            s.stripe_customer_id,
            uc.credits_balance,
            uc.credits_monthly_allowance,
            uc.subscription_tier,
            uc.lifetime_purchase,
            uc.credits_used_this_month,
            (SELECT COUNT(*) FROM quran_conversations WHERE user_id = u.id) as conversation_count
          FROM users u
          LEFT JOIN subscriptions s ON u.id = s.user_id
          LEFT JOIN user_credits uc ON u.id = uc.user_id
          ${whereClause}
          ORDER BY u.created_at DESC
          LIMIT ? OFFSET ?
        `).bind(...bindings, limit, offset).all();
      } catch (columnError) {
        // Fallback for databases without blocked columns
        console.log('[Admin] Falling back to query without blocked columns');
        hasBlockedColumn = false;
        users = await env.DB.prepare(`
          SELECT
            u.id,
            u.email,
            u.name,
            u.picture,
            u.created_at,
            s.plan,
            s.status as subscription_status,
            s.current_period_end,
            s.stripe_customer_id,
            uc.credits_balance,
            uc.credits_monthly_allowance,
            uc.subscription_tier,
            uc.lifetime_purchase,
            uc.credits_used_this_month,
            (SELECT COUNT(*) FROM quran_conversations WHERE user_id = u.id) as conversation_count
          FROM users u
          LEFT JOIN subscriptions s ON u.id = s.user_id
          LEFT JOIN user_credits uc ON u.id = uc.user_id
          ${whereClause}
          ORDER BY u.created_at DESC
          LIMIT ? OFFSET ?
        `).bind(...bindings, limit, offset).all();
      }

      // Transform for frontend
      const transformedUsers = users.results.map(u => ({
        id: u.id,
        email: u.email,
        name: u.name,
        picture: u.picture,
        created_at: u.created_at,
        plan: u.plan,
        tier: u.subscription_tier || 'free',
        credits: u.credits_balance || 0,
        monthly_allowance: u.credits_monthly_allowance || 0,
        used_this_month: u.credits_used_this_month || 0,
        conversation_count: u.conversation_count || 0,
        lifetime_purchase: u.lifetime_purchase || 0,
        blocked: hasBlockedColumn ? (u.blocked === 1) : false,
        blocked_reason: hasBlockedColumn ? u.blocked_reason : null,
      }));

      return new Response(JSON.stringify({
        users: transformedUsers,
        pagination: { page, totalPages, total, limit }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // PUT - Update user
    if (request.method === 'PUT') {
      const { userId, tier, credits, monthlyAllowance } = await request.json();

      if (!userId) {
        return new Response(JSON.stringify({ error: 'User ID required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Map tier to plan name
      const tierToPlan = {
        free: 'free',
        starter: 'starter_monthly',
        premium: 'premium_monthly',
        scholar: 'scholar_monthly',
        lifetime: 'lifetime',
      };
      const plan = tierToPlan[tier] || 'free';

      // Calculate next reset date (1st of next month)
      const now = new Date();
      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const nextResetDate = nextMonth.toISOString().split('T')[0];

      // Update subscriptions table
      await env.DB.prepare(`
        UPDATE subscriptions
        SET plan = ?,
            status = 'active',
            current_period_end = datetime('now', '+1 month')
        WHERE user_id = ?
      `).bind(plan, userId).run();

      // Update user_credits table
      await env.DB.prepare(`
        UPDATE user_credits
        SET subscription_tier = ?,
            credits_balance = ?,
            credits_monthly_allowance = ?,
            credits_used_this_month = 0,
            credits_reset_date = ?,
            lifetime_purchase = ?,
            updated_at = datetime('now')
        WHERE user_id = ?
      `).bind(
        tier || 'free',
        credits || 0,
        monthlyAllowance || 0,
        nextResetDate,
        tier === 'lifetime' ? 1 : 0,
        userId
      ).run();

      console.log('[Admin] Updated user:', userId, 'to tier:', tier, 'credits:', credits);

      return new Response(JSON.stringify({
        success: true,
        message: 'User updated successfully',
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // POST - Block/Unblock user
    if (request.method === 'POST') {
      const { userId, action, reason } = await request.json();

      if (!userId || !action) {
        return new Response(JSON.stringify({ error: 'User ID and action required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if (!['block', 'unblock'].includes(action)) {
        return new Response(JSON.stringify({ error: 'Invalid action. Use "block" or "unblock"' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Prevent admin from blocking themselves
      if (userId === currentUser.id) {
        return new Response(JSON.stringify({ error: 'Cannot block yourself' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Check if target user is also an admin
      const targetUser = await env.DB.prepare('SELECT email FROM users WHERE id = ?').bind(userId).first();
      if (targetUser) {
        const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
        if (adminEmails.includes(targetUser.email?.toLowerCase())) {
          return new Response(JSON.stringify({ error: 'Cannot block another admin' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }

      try {
        if (action === 'block') {
          // Block user and invalidate all their sessions
          await env.DB.prepare(`
            UPDATE users
            SET blocked = 1, blocked_at = datetime('now'), blocked_reason = ?
            WHERE id = ?
          `).bind(reason || 'Account suspended by admin', userId).run();

          // Delete all active sessions for this user
          await env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(userId).run();

          console.log('[Admin] Blocked user:', userId, 'Reason:', reason);
        } else {
          // Unblock user
          await env.DB.prepare(`
            UPDATE users
            SET blocked = 0, blocked_at = NULL, blocked_reason = NULL
            WHERE id = ?
          `).bind(userId).run();

          console.log('[Admin] Unblocked user:', userId);
        }

        return new Response(JSON.stringify({
          success: true,
          message: `User ${action}ed successfully`,
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (blockError) {
        console.error('[Admin] Block/unblock error:', blockError);
        // Check if it's a missing column error
        const errorMsg = blockError.message || String(blockError);
        if (errorMsg.includes('no such column')) {
          return new Response(JSON.stringify({
            error: 'Block feature requires database migration. Please run: ALTER TABLE users ADD COLUMN blocked INTEGER DEFAULT 0; ALTER TABLE users ADD COLUMN blocked_at DATETIME; ALTER TABLE users ADD COLUMN blocked_reason TEXT;'
          }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return new Response(JSON.stringify({
          error: `Failed to ${action} user: ${errorMsg}`
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('Method not allowed', { status: 405 });

  } catch (error) {
    console.error('[Admin] Users error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
