import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todos', {
  state: () => {
    return {
      /** @type {{ title: string, id: number, useId:number, completed: boolean }[]} */
      todos: [],
    };
  },

  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    toggleComplete(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
