<template>
  <div class="main">
    <TodoList :todos="todos" :show-delete-button="true"/>

    <div class="btn-footer">
      <button class="btn" @click="removeAll"><b style="color: white">🗑</b> Delete all</button>
    </div>
  </div>

</template>

<script>
import TodoList from "@/components/TodoList.vue";
import axios from "axios";

export default {
  name: "CompletedTodos",
  components: {TodoList},
  data() {
    return {
      todos: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/todos');

      this.todos = response.data.filter(todo => todo.status === 'completed')
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async removeAll() {
      this.todos.forEach(todo => {
        axios.delete(`http://localhost:3000/todos/${todo.id}`);
      });
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.btn-footer {
  width: 100%;
  text-align: right;
  margin-top: 30px;
}

.btn {
  align-self: end;
  padding: 12px 30px;
  border:none;
  border-radius: 4px;
  background-color: #EB5757;
  color: white;
  cursor: pointer;
}

.btn:hover {
  background-color: #9a3939;
  transition: 200ms;
}
</style>
