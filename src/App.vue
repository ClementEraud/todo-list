<template>
  <v-app v-bind:dark="darkTheme">
    <todo-header></todo-header>
    <v-content>
      <v-container id="content-container">
        <v-layout row wrap>
          <v-flex md4>
            <v-card>
              <todo-list-toolbar></todo-list-toolbar>
              <todo-list></todo-list>
            </v-card>
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import TodoList from './components/TodoList';
  import TodoListToolbar from './components/TodoListToolbar';
  import TodoHeader from './components/TodoHeader';
  import { mapState } from 'vuex';

  export default {
    name: 'App',
    components: {
      TodoList,
      TodoListToolbar,
      TodoHeader
    },
    data () {
      return {
        //
      }
    },
    computed: mapState({
      darkTheme: state => state.darkTheme
    })
  }
</script>

<style scoped>
</style>