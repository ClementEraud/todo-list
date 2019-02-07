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
    <v-btn @click="confirm"> {{ validationText }} </v-btn>
  </v-form>
</template>

<script>
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
  props: {
    onConfirm: Function,
    validationText: String
  },
  watch: {
    username: "validateField",
    password: "validateField"
  },
  methods: {
    validateField() {
      this.valid = this.$refs.loginForm.validate();
    },
    confirm() {
      if (this.$refs.loginForm.validate()) {
        this.onConfirm({
          username: this.username,
          password: this.password
        });
      }
    }
  }
};
</script>
