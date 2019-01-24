<template>
    <v-toolbar card color="primary">
        <v-toolbar-title class="white--text">Things to get done !</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn icon v-on:click="addTodo">
                <v-icon color="white">add</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'TodoListToolbar',
        methods: {
            addTodo() {
                this.$store.dispatch('displayAddingTodo', true);
            }
        }
    }
</script>
