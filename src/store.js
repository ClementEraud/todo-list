import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: false,
    todos: [
      {
        id: 1,
        title: 'Item 1',
        description: 'do item 1'
      },
      {
        id: 2,
        title: 'Item 2',
        description: 'do item 2'
      },
      {
        id: 3,
        title: 'Item 3',
        description: 'do item 3'
      },
    ]
  },
  mutations: {
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
    REMOVE_TODO(state, todoToRemove) {
      state.todos = state.todos.filter(todo => todo.id !== todoToRemove.id);
    }
  },
  actions: {
    switchTheme({ commit }) {
      commit('SWITCH_THEME');
    },
    removeTodo({ commit }, todoToRemove) {
      commit('REMOVE_TODO', todoToRemove);
    }
  }
});
