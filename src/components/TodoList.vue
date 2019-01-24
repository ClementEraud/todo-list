<template>
    <v-container fluid grid-list-lg>
        <v-layout column>
            <v-flex v-if="isAddingTodo">
                <adding-todo></adding-todo>
            </v-flex>
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
    import AddingTodo from './AddingTodo';
    import { mapState } from 'vuex';

    export default {
        name: 'TodoList',
        components: {
            TodoItem,
            AddingTodo,
        },
        computed: mapState({
            todoItems: state => state.todos,
            isAddingTodo: state => state.isAddingTodo
        }),
        methods: {
            clearItem (todoToRemove) {
               this.$store.dispatch('removeTodo', todoToRemove);
            }
        }
    }
</script>

<style>
</style>