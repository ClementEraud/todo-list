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
    import TodoItem from './TodoItem'

    export default {
        name: 'TodoList',
        components: {
            TodoItem
        },
        data: () => ({
            todoItems: [
                {
                    id: 1,
                    title: 'Item 1',
                    description: 'do item 1'
                },
                {
                    id: 2,
                    title: 'Item 2',
                    description: 'do item 2'
                },
                {
                    id: 3,
                    title: 'Item 3',
                    description: 'do item 3'
                },
            ]
        }),
        methods: {
            clearItem: function (todo) {
                this.todoItems = this.todoItems.filter(item => item.id !== todo.id);
            }
        }
    }
</script>

<style>
</style>