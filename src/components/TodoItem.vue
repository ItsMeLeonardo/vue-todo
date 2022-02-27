<script setup>
import { ref, onMounted, defineEmits } from 'vue';

import IconTrash from './icons/IconTrash.vue';

const { isCompleted, id } = defineProps({
  title: String,
  isCompleted: Boolean,
  id: String,
});

const emit = defineEmits(['delete']);

const completed = ref(isCompleted);

const toogleCompleted = () => {
  completed.value = !completed.value;
};

const onDelete = () => {
  emit('delete', { id });
};
</script>

<template>
  <li
    @click="toogleCompleted"
    class="
      bg-indigo-400
      p-3
      mx-auto
      w-full
      max-w-[280px]
      flex
      justify-between
      items-center
      rounded
      cursor-pointer
    "
  >
    <strong class="text-white font-normal">
      <span v-if="completed">✅</span>
      <span v-else>👀</span>
      {{ title }}
    </strong>

    <button @click="onDelete" class="p-2 bg-indigo-900 rounded-full">
      <IconTrash classes="h-4 w-4 text-white" />
    </button>
  </li>
</template>
