<template>
    <div class="todo-list">
        <ul v-if="todos.length">
            <li class="todo-item"
                v-for="todo in todos"
                :key="todo.id">
                <input type="checkbox"
                       :checked="todo.status === 'completed'"
                       @change="changeStatus(todo.id)"
                >
                <span class="todo-description"
                      :style="todo.status === 'completed' ? {'text-decoration': 'line-through'} : ''">
                  {{ todo.description }}
                </span>
                <span
                        v-if="showDeleteButton"
                        class="remove-todo"
                        title="Delete"
                        @click="removeTodo(todo.id)">🗑</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {useTodos} from "@/composables/todos";

const todos = useTodos();

export default {
    name: "TodoList",
    props: {
        todos: {
            type: Array,
            required: true
        },
        showDeleteButton: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        changeStatus(id) {
            todos.changeStatus(id);
        },
        removeTodo(id) {
            todos.remove(id);
        },
    }
}
</script>

<style scoped>
.todo-list {
    flex-basis: 100%;
}

.todo-list ul {
    list-style: none;
    width: 100%;
}

.todo-item {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
}

.todo-item input[type='checkbox'] {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    margin-right: 7px;
    border: 1px solid #828282;
    border-radius: 4px;
    position: relative;
}

.todo-item input:checked {
    background-color: #2F80ED;
}

.todo-item input:checked:after {
    content: '\2714';
    font-size: 14px;
    position: absolute;
    left: 5px;
    color: white;
}

.todo-item .todo-description {
    flex-grow: 1;
}

.remove-todo {
    align-self: end;
    font-size: 20px;
    font-weight: bold;
    color: #BDBDBD;
    cursor: pointer;
}
</style>
