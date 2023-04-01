<template>
  <div class="main">
    <FormAddTodo/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import FormAddTodo from "@/components/FormAddTodo.vue";
import axios from "axios";

export default {
  name: 'HomeView',
  components: {FormAddTodo, TodoList},
  data() {
    return {
      todos: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/todos');
      this.todos = response.data;
    } catch (e) {
      console.log(e);
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
