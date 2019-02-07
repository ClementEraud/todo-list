<template>
  <v-container>
    <v-layout align-center>
      <v-spacer></v-spacer>
      <v-flex>
        <login-form></login-form>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  name: "home",
  components: {
    LoginForm
  }
};
</script>
