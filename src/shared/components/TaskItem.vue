<!-- src/features/tasks/components/TaskItem.vue -->
<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title :class="{ 'task-done': task.done }">
        {{ task.title }}
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-checkbox :input-value="task.done" @change="clickOnTasks" />
    </v-list-item-action>
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
