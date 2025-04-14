export type ITask = { id: number; title: string; done: boolean };

export type TypeTaskList = ITask[];

export interface ITasksState {
  tasks: TypeTaskList;
}

export type TypeFieldState = keyof IAnalyticsState;
