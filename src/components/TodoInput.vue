<script setup>
import { defineEmits, ref } from 'vue';

import { useTodoStore } from '../store/piniaStore';

const todoStore = useTodoStore();

const todoTitle = ref('');

const handleSubmit = () => {
  const title = todoTitle.value;
  if (title.length === 0) return;

  const newTodo = {
    id: Date.now(),
    userId: 1,
    title,
    completed: false,
  };

  todoStore.addTodo(newTodo);

  todoTitle.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex justify-center gap-2">
    <input
      type="text"
      v-model.trim="todoTitle"
      class="
        bg-indigo-100
        px-6
        py-2
        border border-2
        rounded
        outline-none
        focus:border-red-400
      "
    />
    <button class="bg-red-500 px-6 py-2 text-white rounded">add</button>
  </form>
</template>

<style scoped></style>
