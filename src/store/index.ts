import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer, actions as tasksActions } from './slices/tasks';
import { useLocalStorage } from '@/shared/composables/useLocalStorage';

export const actions = {
  ...tasksActions,
};

export const store = configureStore({
  reducer: tasksReducer,
});

store.subscribe(() => {
  console.group('----- store.subscribe');
  const { setItem } = useLocalStorage();
  const { tasks } = store.getState();
  setItem('tasks', tasks);
  console.log('tasks -', tasks);
  console.groupEnd();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
