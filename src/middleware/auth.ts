import type { MiddlewareHandler } from 'hono';

const TOKEN = process.env.API_TOKEN ?? 'dev-token';

export const auth: MiddlewareHandler = async (c, next) => {
	const header = c.req.header('Authorization');
	if (header !== `Bearer ${TOKEN}`) {
		return c.json({ error: 'unauthorized' }, 401);
	}
	await next();
};
