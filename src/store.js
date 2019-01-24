import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: false,
    displayAddFormTodo: false,
    todosEditing: [],
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
    },
    DISPLAY_ADD_FORM_TODO(state, displayFormTodo) {
      state.displayAddFormTodo = displayFormTodo;
    },
    DISPLAY_EDIT_FORM_TODO(state, todoId) {
      state.todosEditing.push(todoId);
    },
    REMOVE_TODO_FROM_EDITION(state, todoId) {
      state.todosEditing = state.todosEditing.filter(id => id !== todoId)
    },
    ADD_TODO(state, todoToAdd) {
      state.todos.push(todoToAdd);
    },
    EDIT_TODO(state, todoEdited) {
      state.todos = state.todos.map(todo => {
        if(todo.id !== todoEdited.id) {
          return todo;
        }
        return todoEdited;
      })
    }
  },
  actions: {
    switchTheme({ commit }) {
      commit('SWITCH_THEME');
    },
    removeTodo({ commit }, todoToRemove) {
      commit('REMOVE_TODO', todoToRemove);
    },
    displayAddFormTodo({ commit }, display) {
      commit('DISPLAY_ADD_FORM_TODO', display);
    },
    displayEditFormTodo({ commit }, todoId) {
      commit('DISPLAY_EDIT_FORM_TODO', todoId);
    },
    removeTodoFromEdition({ commit }, todoId) {
      commit('REMOVE_TODO_FROM_EDITION', todoId);
    },
    addTodo({ commit }, todoToAdd) {
      commit('ADD_TODO', todoToAdd);
      commit('DISPLAY_ADD_FORM_TODO', false);
    },
    editTodo({ commit }, todoEdited) {
      commit('EDIT_TODO', todoEdited);
      commit('REMOVE_TODO_FROM_EDITION', todoEdited.id);
    }
  },
  getters: {
    getLastTodoId(state) {
      return state.todos.sort((a, b) => a.id > b.id ? -1 : 1)[0].id;
    },
    isTodoBeingEdited: state => id => {
      return !!state.todosEditing.find(idEditing => idEditing === id);
    }
  }
});
