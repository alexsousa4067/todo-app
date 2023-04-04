<template>
    <div class="main">
        <FormAddTodo/>
        <TodoList :todos="activeTodos"/>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import FormAddTodo from "@/components/FormAddTodo.vue";
import {useTodos} from "@/composables/todos";

const todos = useTodos();

export default {
    name: 'ActiveTodos',
    components: {FormAddTodo, TodoList},
    computed: {
        activeTodos() {
            return todos.activeTodos();
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-wrap: wrap;
}
</style>
