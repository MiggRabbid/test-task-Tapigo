import type { TypeTaskList } from '@/types/types';

export const fetchTasks = async (): Promise<TypeTaskList | void> => {
  try {
    const response = await fetch('./data/tasks.json');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
