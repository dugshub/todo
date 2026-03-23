import { Hono } from 'hono';
import { store } from '../db/store';

export const todos = new Hono()
	.get('/', (c) => c.json(store.list()))
	.post('/', async (c) => {
		const { title } = await c.req.json();
		return c.json(store.add(title), 201);
	})
	.patch('/:id', async (c) => {
		const todo = store.update(c.req.param('id'), await c.req.json());
		return todo ? c.json(todo) : c.json({ error: 'not found' }, 404);
	})
	.delete('/:id', (c) => {
		return store.remove(c.req.param('id'))
			? c.body(null, 204)
			: c.json({ error: 'not found' }, 404);
	});
