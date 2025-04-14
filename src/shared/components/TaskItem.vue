<!-- src/features/tasks/components/TaskItem.vue -->
<template>
  <v-list-item
    class="max-w-3xl w-full! h-fit! px-10! py-5! rounded-md! shadow-md! flex! justify-between! items-center!"
  >
    <div class="w-full! h-fit! flex! justify-between! items-center!">
      <v-list-item-title class="w-fit!">
        {{ task.title }}
      </v-list-item-title>
      <v-checkbox :input-value="task.done" @change="clickOnTasks" />
    </div>
  </v-list-item>
</template>

<script lang="ts">
import { useActions } from '@/shared/composables/useActions';

export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { setTaskState } = useActions();

    const clickOnTasks = () => {
      setTaskState(props.task.id);
    };

    return { clickOnTasks };
  },
};
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
}
</style>
