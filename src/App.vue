<template>
  <v-app>
    <v-content>
      <v-container id="content-container">
        <v-layout row>
          <v-spacer></v-spacer>
          <v-flex>
            <v-card v-bind:dark="darkTheme">
              <todo-list-toolbar></todo-list-toolbar>
              <todo-list></todo-list>
            </v-card>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex>
            <v-btn icon v-on:click="switchTheme">
              <v-icon>invert_colors</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import TodoList from './components/TodoList';
  import TodoListToolbar from './components/TodoListToolbar';
  import { mapState } from 'vuex';

  export default {
    name: 'App',
    components: {
      TodoList,
      TodoListToolbar
    },
    data () {
      return {
        //
      }
    },
    computed: mapState({
      darkTheme: state => state.darkTheme
    }),
    methods: {
      switchTheme: function () {
        this.$store.dispatch('switchTheme');
      }
    }
  }
</script>

<style scoped>
</style>