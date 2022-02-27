<script setup>
import { ref, onMounted } from 'vue';

import TodoItem from './TodoItem.vue';
import TodoInput from './TodoInput.vue';
import { getTodos } from '../service/getTodos.js';

const todos = ref([]);
const inputTitle = ref('');

onMounted(async () => {
  // todos.value = await getTodos();
});

const addTodo = ({ todo }) => {
  todos.value.unshift(todo);
};

const deleteTodo = ({ id }) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>

<template>
  <TodoInput @newTodo="addTodo" />

  <ul v-if="todos" class="flex flex-col gap-2">
    <TodoItem
      v-for="todo in todos.slice(0, 10)"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :isCompleted="todo.completed"
      @delete="deleteTodo"
    />
  </ul>
  <span v-else="todos">loading ...</span>
</template>

<style scoped></style>
