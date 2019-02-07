<template>
  <v-form ref="loginForm">
    <v-text-field
      v-model="username"
      :rules="rules"
      label="Username"
      clearable
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="rules"
      :type="'password'"
      label="Password"
      clearable
    ></v-text-field>
    <v-btn @click="confirm"> Se Connecter </v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import { login } from "../constants";

export default {
  name: "LoginForm",
  data() {
    return {
      valid: true,
      username: "",
      password: "",
      rules: [
        v => !!v || `Can't be empty !`,
        v => (v && v.length !== 0) || `Can't be empty !`
      ]
    };
  },
  computed: mapState({
    user: state => state.user
  }),
  watch: {
    username: "validateField",
    password: "validateField",
    user: "goToTodos"
  },
  methods: {
    validateField() {
      this.valid = this.$refs.loginForm.validate();
    },
    confirm() {
      if (this.$refs.loginForm.validate()) {
        //TO-DO login
        this.$store.dispatch(login, {
          username: this.username,
          password: this.password
        });
      }
    },
    goToTodos() {
      if (this.user) {
        this.$router.push("/todos");
      }
    }
  }
};
</script>
