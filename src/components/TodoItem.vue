<script setup>
import { ref, onMounted, defineEmits } from 'vue';

import { useTodoStore } from '../store/piniaStore';

import IconTrash from './icons/IconTrash.vue';

const todoStore = useTodoStore();

defineProps({
  title: String,
  completed: Boolean,
  id: String,
});
</script>

<template>
  <li
    @click="todoStore.toggleComplete(id)"
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

    <button @click="todoStore.deleteTodo(id)" class="p-2 bg-indigo-900 rounded-full">
      <IconTrash classes="h-4 w-4 text-white" />
    </button>
  </li>
</template>
