<template>
    <div class="main">
        <TodoList :todos="completedTodos"
                  :show-delete-button="true"/>

        <div class="btn-footer">
            <button class="btn"
                    @click="removeAll"><b style="color: white">🗑</b> Delete all
            </button>
        </div>
    </div>

</template>

<script>
import TodoList from "@/components/TodoList.vue";
import {useTodos} from "@/composables/todos";

const todos = useTodos();

export default {
    name: "CompletedTodos",
    components: {TodoList},
    computed: {
        completedTodos() {
            return todos.completedTodos();
        }
    },
    methods: {
        async removeAll() {
            this.completedTodos.forEach(todo => {
                todos.remove(todo.id)
            });
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
    border: none;
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
