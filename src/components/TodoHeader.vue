<template>
    <v-toolbar color="blue-grey darken-4">
      <v-toolbar-title class="white--text"> 
        One day there will be a header here 
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon>
        <v-btn icon v-on:click="switchTheme" dark>
          <v-icon>invert_colors</v-icon>
        </v-btn>
      </v-toolbar-side-icon>
    </v-toolbar>
</template>

<script>
export default {
    name: 'TodoHeader'
}
</script>
