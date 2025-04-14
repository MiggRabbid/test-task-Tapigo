<!-- src/features/tasks/components/TaskList.vue -->
<template>
  <v-container>
    <v-list>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { computed, onBeforeMount } from 'vue';
import TaskItem from '@/shared/components/TaskItem.vue';
import { fetchTasks } from '@/api/api';
import { useActions } from '@/shared/composables/useActions';
import { useRedux } from '@/shared/composables/useRedux';
import { useLocalStorage } from '@/shared/composables/useLocalStorage';

export default {
  name: 'TaskList',
  components: { TaskItem },
  setup() {
    const { state } = useRedux();
    const { setTasks } = useActions();
    const { getItem } = useLocalStorage();
    onBeforeMount(async () => {
      const oldTasks = getItem('tasks');
      if (oldTasks) {
        setTasks(oldTasks);
        return;
      }
      const tasks = await fetchTasks();
      if (tasks) {
        setTasks(tasks);
      }
    });

    const tasks = computed(() => state.value.tasks);

    return { tasks };
  },
};
</script>
