<script setup>
import { ref, onMounted } from 'vue';

import { useTodoStore } from '../composables';

import TodoItem from './TodoItem.vue';
import TodoInput from './TodoInput.vue';
import { getTodos } from '../service/getTodos.js';

const { todos } = useTodoStore();

onMounted(async () => {
  // todos.value = await getTodos();
});
</script>

<template>
  <TodoInput />

  <ul v-if="todos" class="flex flex-col gap-2">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :completed="todo.completed"
    />
  </ul>
  <span v-else="todos">loading ...</span>
</template>

<style scoped></style>
