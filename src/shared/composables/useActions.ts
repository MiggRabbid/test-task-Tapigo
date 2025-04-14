import { useRedux } from '@/shared/composables/useRedux';
import { actions } from '@/store/index';
import type { TypeTaskList } from '@/types/types';

export function useActions() {
  const { dispatch } = useRedux();

  const setTaskState = (taskId: number) => {
    dispatch(actions.setTaskState(taskId));
  };
  const setTasks = (tasks: TypeTaskList) => {
    dispatch(actions.setTasks(tasks));
  };

  return { setTaskState, setTasks };
}
