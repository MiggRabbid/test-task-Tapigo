import { ref, onUnmounted } from 'vue';
import { store } from '@/store/index';

export const useRedux = () => {
  const state = ref(store.getState());

  const unsubscribe = store.subscribe(() => {
    state.value = store.getState();
  });

  onUnmounted(() => {
    unsubscribe();
  });

  return {
    state,
    dispatch: store.dispatch,
  };
};
