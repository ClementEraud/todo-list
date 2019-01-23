<template>
    <v-card ripple hover tile>
        <v-card-title>
            {{todoItem.title}}
        </v-card-title>
        <v-card-text>
            {{todoItem.description}}
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: ['todoItem']
    }
</script>

