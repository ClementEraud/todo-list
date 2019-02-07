import Vue from "vue";
import Vuex from "vuex";
import { login } from "./store_actions/login";
import { removeTodo } from "./store_actions/removeTodo";
import { addTodo } from "./store_actions/addTodo";
import { editTodo } from "./store_actions/editTodo";

import {
  SWITCH_THEME,
  DISCONNECT_USER,
  DISPLAY_ADD_FORM_TODO,
  DISPLAY_EDIT_FORM_TODO,
  REMOVE_TODO_FROM_EDITION,
  UPDATE_STATE
} from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: false,
    displayAddFormTodo: false,
    todosEditing: [],
    user: null
  },
  mutations: {
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
    LOGIN(state, user) {
      state.user = user;
    },
    DISCONNECT_USER(state) {
      state.user = null;
    },
    UPDATE_STATE(state, newState) {
      state = newState;
    },
    UPDATE_TODOS(state, newTodos) {
      state.user.todos = newTodos;
    },
    DISPLAY_ADD_FORM_TODO(state, displayFormTodo) {
      state.displayAddFormTodo = displayFormTodo;
    },
    DISPLAY_EDIT_FORM_TODO(state, todoId) {
      state.todosEditing.push(todoId);
    },
    REMOVE_TODO_FROM_EDITION(state, todoId) {
      state.todosEditing = state.todosEditing.filter(id => id !== todoId);
    }
  },
  actions: {
    switchTheme({ commit }) {
      commit(SWITCH_THEME);
    },
    addTodo,
    removeTodo,
    editTodo,
    login,
    disconnect({ commit }) {
      commit(DISCONNECT_USER);
    },
    displayAddFormTodo({ commit }, display) {
      commit(DISPLAY_ADD_FORM_TODO, display);
    },
    displayEditFormTodo({ commit }, todoId) {
      commit(DISPLAY_EDIT_FORM_TODO, todoId);
    },
    removeTodoFromEdition({ commit }, todoId) {
      commit(REMOVE_TODO_FROM_EDITION, todoId);
    },
    updateState({ commit }, newState) {
      commit(UPDATE_STATE, newState);
    }
  },
  getters: {
    isTodoBeingEdited: state => id => {
      return !!state.todosEditing.find(idEditing => idEditing === id);
    },
    getState: state => state,
  },
  plugins: [
    store => {
      if(localStorage.state) {
        store.replaceState(JSON.parse(localStorage.state));
      }

      store.subscribe((mutation, state) => {
        localStorage.state = JSON.stringify(state);
      })
    } 
  ]
});
