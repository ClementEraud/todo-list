<template>
  <v-toolbar>
    <v-toolbar-title>Things to get done !</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon v-on:click="addTodo">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { displayAddFormTodo } from "../constants";

export default {
  name: "TodoListToolbar",
  methods: {
    addTodo() {
      this.$store.dispatch(displayAddFormTodo, true);
    }
  }
};
</script>
