import { Hono } from 'hono';
import { todos } from './api/todos';
import { auth } from './middleware/auth';
import { validate } from './middleware/validate';

const app = new Hono();

app.get('/', (c) => c.text('todo: the most important app ever written'));
app.use('/todos/*', auth);
app.use('/todos/*', validate);
app.route('/todos', todos);

export default {
	port: 3000,
	fetch: app.fetch,
};
