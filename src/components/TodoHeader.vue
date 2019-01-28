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
    </v-toolbar>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'TodoHeader',
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
