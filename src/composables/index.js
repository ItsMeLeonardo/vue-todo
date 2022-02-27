import { computed } from 'vue';
import { useStore } from 'vuex';

export const useTodoStore = () => {
  const store = useStore();

  return {
    // state
    todos: computed(() => store.state.todos),
    //mutations
    addTodo: (todo) => {
      store.commit('addTodo', todo);
    },
    toggleComplete: (id) => {
      store.commit('toggleTodoStatus', id);
    },
    deleteTodo: (id) => {
      store.commit('deleteTodo', id);
    },
  };
};
