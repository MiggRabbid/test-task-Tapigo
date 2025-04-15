<template>
  <v-list-item
    class="max-w-2xl w-full! h-fit! px-10! py-0! rounded-md! shadow-md! flex! justify-between! items-center! border"
  >
    <v-list-item-title class="min-w-fit! grow h-fit!">
      {{ task.title }}
    </v-list-item-title>
    <v-list-item-action @change="clickOnTasks">
      <v-checkbox
        :model-value="task.done"
        class="w-fit! h-fit! flex! flex-row-reverse! justify-center! items-center!"
      />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { useActions } from '@/shared/composables/useActions';
import type { ITask } from '@/types/types';

export default defineComponent({
  name: 'TaskItem',
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
  setup(props) {
    const { setTaskState } = useActions();
    console.log('task -', props.task);

    const clickOnTasks = () => {
      setTaskState(props.task.id);
    };

    return { clickOnTasks };
  },
});
</script>

<style scoped>
::v-deep .v-list-item__content {
  width: 100% !important;
  height: fit-content !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

::v-deep .v-list-item__content {
  width: 100% !important;
  height: fit-content !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
</style>
