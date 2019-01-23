<template>
  <v-app>
    <v-content>
      <v-container id="content-container">
        <v-layout row>
          <v-spacer></v-spacer>
          <v-flex>
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
  import TodoItem from './components/TodoItem';
  import TodoListToolbar from './components/TodoListToolbar';

  export default {
    name: 'App',
    components: {
      TodoList,
      TodoItem,
      TodoListToolbar
    },
    data () {
      return {
        //
      }
    }
  }
</script>

<style scoped>
</style>