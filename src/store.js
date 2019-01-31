import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const todoUrl = 'http://localhost:4000/todo';

export default new Vuex.Store({
  state: {
    darkTheme: false,
    displayAddFormTodo: false,
    todosEditing: [],
    todos: []
  },
  mutations: {
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
    REMOVE_TODO(state, todoToRemove) {
      state.todos = state.todos.filter(todo => todo._id !== todoToRemove._id);
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
        if(todo._id !== todoEdited._id) {
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
    async addTodo({ commit }, todoToAdd) {
      try {
        const res = await axios.post(todoUrl, {
          query: `mutation CreateTodo($newTodo: TodoInput){
            createTodo(newTodo: $newTodo) {
              _id
              title
              description
            }
          }`,
          variables: {
            newTodo: todoToAdd
          }
        })
        commit('ADD_TODO', res.data.data.createTodo);
        commit('DISPLAY_ADD_FORM_TODO', false);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    },
    async editTodo({ commit }, todoEdited) {
      try {
        await axios.post(todoUrl, {
          query: `mutation UpdateTodo($id: ID, $newTodo: TodoInput){
            updateTodo(id: $id, newTodo: $newTodo){
              _id,
              title,
              description
            }
          }`,
          variables: {
            id: todoEdited._id,
            newTodo: {
              title: todoEdited.title,
              description: todoEdited.description
            }
          }
        });
        
        commit('EDIT_TODO', todoEdited);
        commit('REMOVE_TODO_FROM_EDITION', todoEdited._id);
      } catch(err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    },
    async fetchTodos({ commit }) {
      try {
        // fetch todos
        const res = await axios.post(todoUrl, {
          query: `{
            getAllTodos {
              _id
              title
              description
            }
          }
          `
        });

        // add them to the store
        res.data.data.getAllTodos.forEach(todo => {
          commit('ADD_TODO', todo);
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  },
  getters: {
    isTodoBeingEdited: state => id => {
      return !!state.todosEditing.find(idEditing => idEditing === id);
    }
  }
});
