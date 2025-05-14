import { Todo } from '@/types/todo';

export const loadTodos = (): Todo[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
};

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
