<template>
    <v-container fluid grid-list-lg>
        <v-layout column>
            <v-flex v-if="displayAddFormTodo">
                <todo-form></todo-form>
            </v-flex>
            <v-flex 
                xs10 
                v-for="todo in todoItems" 
                v-bind:key="todo.id">
                <todo-item v-bind:todoItem="todo"></todo-item>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import TodoItem from './TodoItem';
    import TodoForm from './TodoForm';
    import { mapState } from 'vuex';

    export default {
        name: 'TodoList',
        components: {
            TodoItem,
            TodoForm,
        },
        computed: mapState({
            todoItems: state => state.todos,
            displayAddFormTodo: state => state.displayAddFormTodo
        })
    }
</script>

<style>
</style>