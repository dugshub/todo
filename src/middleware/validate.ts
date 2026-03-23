import type { MiddlewareHandler } from 'hono';

export const validate: MiddlewareHandler = async (c, next) => {
	if (c.req.method === 'POST' || c.req.method === 'PATCH') {
		const body = await c.req.json();
		if (c.req.method === 'POST' && typeof body.title !== 'string') {
			return c.json({ error: 'title is required' }, 400);
		}
		if (body.title !== undefined && typeof body.title !== 'string') {
			return c.json({ error: 'title must be a string' }, 400);
		}
		if (body.done !== undefined && typeof body.done !== 'boolean') {
			return c.json({ error: 'done must be a boolean' }, 400);
		}
	}
	await next();
};
