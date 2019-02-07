<template>
  <v-container>
    <v-layout align-center>
      <v-spacer></v-spacer>
      <v-flex>
        <login-form
          v-bind:on-confirm="createAccount"
          validation-text="Create Account"
        >
        </login-form>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from "./LoginForm";
import { createAccount } from "../constants";
import { mapState } from "vuex";

export default {
  name: "AccountCreation",
  components: {
    LoginForm
  },
  computed: mapState({
    user: state => state.user
  }),
  watch: {
    user: "goToTodos"
  },
  methods: {
    createAccount(newUser) {
      this.$store.dispatch(createAccount, newUser);
    },
    goToTodos() {
      if (this.user) {
        this.$router.push("/todos");
      }
    }
  }
};
</script>
