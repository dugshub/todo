import type { Todo } from './schema';

const todos: Todo[] = [];

export const store = {
	list: () => todos,
	get: (id: string) => todos.find((t) => t.id === id),
	add: (title: string): Todo => {
		const todo: Todo = {
			id: crypto.randomUUID(),
			title,
			done: false,
			createdAt: new Date().toISOString(),
		};
		todos.push(todo);
		return todo;
	},
	update: (id: string, data: Partial<Pick<Todo, 'title' | 'done'>>) => {
		const todo = todos.find((t) => t.id === id);
		if (!todo) return null;
		Object.assign(todo, data);
		return todo;
	},
	remove: (id: string) => {
		const i = todos.findIndex((t) => t.id === id);
		if (i === -1) return false;
		todos.splice(i, 1);
		return true;
	},
};
