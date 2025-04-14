<template>
  <v-main>
    <v-container>
      <TaskList />
    </v-container>
  </v-main>
</template>

<script lang="ts">
import TaskList from '@/features/TaskList.vue';

export default {
  name: 'HomeView',
  components: { TaskList },
};
</script>
