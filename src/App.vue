<template>
  <v-app v-bind:dark="darkTheme">
    <todo-header></todo-header>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    TodoHeader
  },
  data() {
    return {
      //
    };
  },
  computed: mapState({
    darkTheme: state => state.darkTheme
  })
};
</script>
