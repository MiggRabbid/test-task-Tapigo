import type { ITasksState } from '@/types/types';

export const useLocalStorage = () => {
  const setItem = <K extends Extract<keyof ITasksState, string>>(
    key: K,
    item: ITasksState[K],
  ) => {
    console.group('----- useLocalStorage - setItem');
    console.log('key  -', key);
    console.log('item -', item);
    console.groupEnd();
    localStorage.setItem(key, JSON.stringify(item));
  };
  const getItem = <K extends Extract<keyof ITasksState, string>>(
    key: K,
  ): ITasksState[K] | null => {
    console.group('----- useLocalStorage - getItem');
    const item = localStorage.getItem(key);
    console.log('key  -', key);
    console.log('item -', item);
    console.groupEnd();
    return !!item ? JSON.parse(item) : null;
  };

  return { getItem, setItem };
};
