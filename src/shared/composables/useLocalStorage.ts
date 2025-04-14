import type { ITasksState } from '@/types/types';

export const useLocalStorage = () => {
  const setItem = <K extends Extract<keyof ITasksState, string>>(
    key: K,
    item: ITasksState[K],
  ) => {
    localStorage.setItem(key, JSON.stringify(item));
  };
  const getItem = <K extends Extract<keyof ITasksState, string>>(
    key: K,
  ): ITasksState[K] | null => {
    const item = localStorage.getItem(key);
    return !!item ? JSON.parse(item) : null;
  };

  return { getItem, setItem };
};
