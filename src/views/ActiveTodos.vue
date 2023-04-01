<template>
  <div class="main">
    <FormAddTodo/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import FormAddTodo from "@/components/FormAddTodo.vue";

export default {
  name: 'ActiveTodos',
  components: {FormAddTodo, TodoList},
  data() {
    return {
      todos: []
    };
  },
  created() {
    fetch('http://localhost:3000/todos')
      .then(result => result.json())
      .then(todos => {
        this.todos = todos.filter(todo => todo.status !== 'completed');
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
</style>
