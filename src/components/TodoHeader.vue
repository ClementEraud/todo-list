<template>
  <v-toolbar>
    <v-toolbar-title>
      One day there will be a header here
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon>
      <v-btn icon v-on:click="switchTheme">
        <v-icon>invert_colors</v-icon>
      </v-btn>
    </v-toolbar-side-icon>
    <v-toolbar-side-icon v-if="user">
      <v-btn icon v-on:click="disconnect">
        <v-icon>power_off</v-icon>
      </v-btn>
    </v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import { mapState } from "vuex";
import { disconnect, switchTheme } from "../constants";

export default {
  name: "TodoHeader",
  computed: mapState({
    darkTheme: state => state.darkTheme,
    user: state => state.user
  }),
  methods: {
    switchTheme: function() {
      this.$store.dispatch(switchTheme);
    },
    disconnect: function() {
      this.$router.push("/");
      this.$store.dispatch(disconnect);
    }
  }
};
</script>
