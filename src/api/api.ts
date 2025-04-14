import type { TypeTaskList } from '@/types/types';

export const fetchTasks = async (): Promise<TypeTaskList | void> => {
  console.group('----- fetchTasks');
  try {
    const response = await fetch('/data/tasks.json');
    console.log('response -', response);
    return await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    console.groupEnd();
  }
};
