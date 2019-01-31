<template>
    <div>
        <todo-form v-if="isTodoBeingEdited" v-bind:todoToEdit="todoItem"></todo-form>
        <v-card ripple hover tile v-if="!isTodoBeingEdited">
            <v-card-title>
                {{todoItem.title}}
                <v-spacer></v-spacer>
                <v-btn icon @click="displayEdit"> <v-icon>create</v-icon> </v-btn>
                <v-btn icon @click="clear"> <v-icon>done</v-icon> </v-btn>
            </v-card-title>
            <v-card-text>
                {{todoItem.description}}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import TodoForm from "./TodoForm";

export default {
  name: "TodoItem",
  components: {
    TodoForm
  },
  computed: {
    isTodoBeingEdited() {
      return this.$store.getters.isTodoBeingEdited(this.todoItem._id);
    }
  },
  props: ["todoItem"],
  methods: {
    clear() {
      this.$store.dispatch("removeTodo", this.todoItem);
    },
    displayEdit() {
      this.$store.dispatch("displayEditFormTodo", this.todoItem._id);
    }
  }
};
</script>
