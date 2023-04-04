<template>
    <form class="add-todo-form"
          @submit.prevent="addTodo">
        <input type="text"
               class="add-todo"
               placeholder="add details"
               v-model="todoDescription"
        >
        <button class="btn btn-primary"
                @click.prevent="addTodo">Add
        </button>
    </form>
</template>

<script>
import {useTodos} from "@/composables/todos";

const todos = useTodos();
const uuid = require("uuid");

export default {
    name: "FormAddTodo",
    data() {
        return {
            todoDescription: ""
        }
    },
    methods: {
        addTodo() {
            todos.add({
                id: uuid.v4(),
                description: this.todoDescription,
                status: 'active'
            })

            this.todoDescription = ''
        }
    }
}
</script>

<style scoped>
.add-todo-form {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    margin-bottom: 33px;
}

.add-todo {
    flex-grow: 1;
    border: 1px solid #BDBDBD;
    height: 56px;
    padding: 12px;
    border-radius: 12px;
    font-size: 14px;
    line-height: 17px;
    margin-right: 25px;
}

.add-todo-form .btn {
    height: 56px;
    padding: 0 40px;
    font-size: 14px;
    color: white;
    background-color: #2F80ED;
    border: none;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(127, 177, 243, 0.4);
    cursor: pointer;
}

.add-todo-form .btn:hover {
    background-color: #1e4e96;
    transition: 200ms;
}
</style>
