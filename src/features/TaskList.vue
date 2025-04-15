<template>
  <v-container>
    <div class="min-w-50 min-h-50">
      <v-list class="flex flex-col gap-4">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
      </v-list>
    </div>
  </v-container>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue';
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
    onMounted(async () => {
      const oldTasks = getItem('tasks');
      if (oldTasks && oldTasks?.length > 0) {
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
