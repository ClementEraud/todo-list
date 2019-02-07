<template>
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
</template>

<script>
import TodoListToolbar from "./TodoListToolbar.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "Todos",
  components: {
    TodoListToolbar,
    TodoList
  }
};
</script>
