/**
 * Admin API - Announcements Management
 * CRUD operations for admin announcements/notifications
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
      SELECT u.id, u.email
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

    // GET - List all announcements
    if (request.method === 'GET') {
      const announcements = await env.DB.prepare(`
        SELECT *
        FROM announcements
        ORDER BY priority DESC, created_at DESC
      `).all();

      // Add status field for UI
      const now = new Date().toISOString();
      const withStatus = announcements.results.map(a => {
        let status = 'active';
        if (a.starts_at && a.starts_at > now) {
          status = 'scheduled';
        } else if (a.expires_at && a.expires_at < now) {
          status = 'expired';
        }
        return { ...a, status };
      });

      return new Response(JSON.stringify({ announcements: withStatus }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // POST - Create new announcement
    if (request.method === 'POST') {
      const body = await request.json();
      const { title, message, type, target, priority, starts_at, expires_at, dismissible, link_url, link_text } = body;

      if (!title || !message) {
        return new Response(JSON.stringify({ error: 'Title and message are required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const id = `ann_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      await env.DB.prepare(`
        INSERT INTO announcements (id, title, message, type, target, priority, starts_at, expires_at, dismissible, link_url, link_text, created_by)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        id,
        title,
        message,
        type || 'info',
        target || 'all',
        priority || 0,
        starts_at || null,
        expires_at || null,
        dismissible !== false ? 1 : 0,
        link_url || null,
        link_text || null,
        currentUser.id
      ).run();

      console.log('[Admin] Created announcement:', id, title);

      return new Response(JSON.stringify({ success: true, id }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // PUT - Update announcement
    if (request.method === 'PUT') {
      const body = await request.json();
      const { id, title, message, type, target, priority, starts_at, expires_at, dismissible, link_url, link_text } = body;

      if (!id) {
        return new Response(JSON.stringify({ error: 'Announcement ID required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      await env.DB.prepare(`
        UPDATE announcements
        SET title = ?, message = ?, type = ?, target = ?, priority = ?,
            starts_at = ?, expires_at = ?, dismissible = ?, link_url = ?, link_text = ?,
            updated_at = datetime('now')
        WHERE id = ?
      `).bind(
        title,
        message,
        type || 'info',
        target || 'all',
        priority || 0,
        starts_at || null,
        expires_at || null,
        dismissible !== false ? 1 : 0,
        link_url || null,
        link_text || null,
        id
      ).run();

      console.log('[Admin] Updated announcement:', id);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // DELETE - Delete announcement(s)
    // Supports: ?id=single_id OR ?ids=id1,id2,id3 OR ?all=true
    if (request.method === 'DELETE') {
      const url = new URL(request.url);
      const id = url.searchParams.get('id');
      const ids = url.searchParams.get('ids');
      const deleteAll = url.searchParams.get('all');

      if (deleteAll === 'true') {
        // Delete all announcements
        await env.DB.prepare('DELETE FROM announcements').run();
        console.log('[Admin] Deleted all announcements');
        return new Response(JSON.stringify({ success: true, deleted: 'all' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if (ids) {
        // Bulk delete multiple announcements
        const idList = ids.split(',').map(i => i.trim()).filter(Boolean);
        if (idList.length === 0) {
          return new Response(JSON.stringify({ error: 'No valid IDs provided' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        const placeholders = idList.map(() => '?').join(',');
        await env.DB.prepare(`DELETE FROM announcements WHERE id IN (${placeholders})`).bind(...idList).run();
        console.log('[Admin] Bulk deleted announcements:', idList);
        return new Response(JSON.stringify({ success: true, deleted: idList.length }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if (!id) {
        return new Response(JSON.stringify({ error: 'Announcement ID required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      await env.DB.prepare('DELETE FROM announcements WHERE id = ?').bind(id).run();
      console.log('[Admin] Deleted announcement:', id);

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response('Method not allowed', { status: 405 });

  } catch (error) {
    console.error('[Admin] Announcements error:', error);
    return new Response(JSON.stringify({ error: 'Server error: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
