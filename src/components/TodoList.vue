<template>
    <v-container fluid grid-list-lg>
        <v-layout column>
            <v-flex 
                xs10 
                v-for="todo in todoItems" 
                v-bind:key="todo.id"
                v-on:click="clearItem(todo)">
                <todo-item v-bind:todoItem="todo"></todo-item>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import TodoItem from './TodoItem';
    import { mapState } from 'vuex';

    export default {
        name: 'TodoList',
        components: {
            TodoItem
        },
        computed: mapState({
            todoItems: state => state.todos
        }),
        methods: {
            clearItem: function (todo) {
               //TO-DO implement delete todo from todos
            }
        }
    }
</script>

<style>
</style>