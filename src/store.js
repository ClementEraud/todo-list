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
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    }
  },
  actions: {
    addTodo(todo) {
      this.commit('ADD_TODO', todo);
    },
    switchTheme() {
      this.commit('SWITCH_THEME');
    }
  }
});
