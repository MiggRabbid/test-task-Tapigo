import type { TypeTaskList } from '@/types/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: { tasks: TypeTaskList } = { tasks: [] };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    setTasks(state, action: PayloadAction<TypeTaskList>) {
      state.tasks = action.payload;
    },
    setTaskState(state, action: PayloadAction<number>) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
  },
});

export const { actions } = tasksSlice;

export const tasksReducer = tasksSlice.reducer;
