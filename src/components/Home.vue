<template>
  <v-container>
    <v-layout align-center>
      <v-spacer></v-spacer>
      <v-flex>
        <login-form
          v-bind:on-confirm="login"
          validation-text="Login"
        ></login-form>
        <router-link to="/account-creation">
          <a>Don't have an account ? Create one here !</a>
        </router-link>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import { login } from "../constants";
import { mapState } from "vuex";

export default {
  name: "home",
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
    login(user) {
      this.$store.dispatch(login, user);
    },
    goToTodos() {
      if (this.user) {
        this.$router.push("/todos");
      }
    }
  }
};
</script>
