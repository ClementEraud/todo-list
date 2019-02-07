<template>
  <v-card ripple hover tile>
    <v-card-title>What do you want to do next ?</v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="title"
          :rules="rules"
          label="Title"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="description"
          :rules="rules"
          label="Description"
          clearable
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="cancel"> <v-icon> cancel </v-icon> </v-btn>
      <v-btn icon @click="confirm"> <v-icon> done </v-icon> </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  removeTodoFromEdition,
  displayAddFormTodo,
  editTodo,
  addTodo
} from "../constants";

export default {
  name: "TodoForm",
  data() {
    return {
      valid: true,
      title: this.todoToEdit ? this.todoToEdit.title : null,
      description: this.todoToEdit ? this.todoToEdit.description : null,
      rules: [
        v => !!v || `Can't be empty !`,
        v => (v && v.length !== 0) || `Can't be empty !`,
        v => (v && v.length < 50) || "Easy there, tiger!"
      ]
    };
  },
  props: ["todoToEdit"],
  watch: {
    title: "validateField",
    description: "validateField"
  },
  methods: {
    validateField() {
      this.valid = this.$refs.form.validate();
    },
    cancel() {
      this.$refs.form.reset();

      if (this.todoToEdit) {
        this.$store.dispatch(removeTodoFromEdition, this.todoToEdit._id);
      } else {
        this.$store.dispatch(displayAddFormTodo, false);
      }
    },
    confirm() {
      if (this.$refs.form.validate()) {
        if (this.todoToEdit) {
          // editing existing todo:
          this.$store.dispatch(editTodo, {
            _id: this.todoToEdit._id,
            title: this.title,
            description: this.description
          });
          return;
        }

        // adding a new todo:
        this.$store.dispatch(addTodo, {
          title: this.title,
          description: this.description
        });
      }
    }
  }
};
</script>
