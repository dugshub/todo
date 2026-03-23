import { Hono } from 'hono';
import { todos } from './api/todos';
import { auth } from './middleware/auth';

const app = new Hono();

app.get('/', (c) => c.text('todo: the most important app ever written'));
app.use('/todos/*', auth);
app.route('/todos', todos);

export default {
	port: 3000,
	fetch: app.fetch,
};
