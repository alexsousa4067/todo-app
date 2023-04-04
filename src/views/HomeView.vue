<template>
  <div class="main">
    <FormAddTodo/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import FormAddTodo from "@/components/FormAddTodo.vue";
import {useTodos} from "@/composables/todos";

const todos = useTodos();

export default {
  name: 'HomeView',
  components: {FormAddTodo, TodoList},
  data() {
    return {
      todos: todos.allTodos()
    };
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
</style>
