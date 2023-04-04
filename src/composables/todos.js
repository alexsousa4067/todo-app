import {ref} from "vue";

const todos = ref([]);

export const useTodos = () => {
    function allTodos() {
        return todos.value;
    }

    function activeTodos() {
        return todos.value.filter(todo => todo.status === 'active');
    }

    function completedTodos() {
        return todos.value.filter(todo => todo.status === 'completed');
    }

    function add(todo) {
        todos.value.push(todo);
        store();
    }

    function remove(id) {
        todos.value.splice(todos.value.findIndex(todo => todo.id === id), 1);
        store();
    }

    function changeStatus(id) {
        let index = todos.value.findIndex(todo => todo.id === id);

        if (index !== undefined) {
            let todo = todos.value[index];
            if (todo.status === 'active') {
                todo.status = 'completed';
            } else {
                todo.status = 'active';
            }
            todos.value[index] = todo;
        }
        store();
    }

    function store() {
        localStorage.setItem('todos', JSON.stringify(todos.value));
    }

    if (localStorage.getItem('todos') && !todos.value.length) {
        JSON.parse(localStorage.getItem('todos')).forEach(todo => {
            todos.value.push(todo)
        })
    }

    return {
        allTodos,
        activeTodos,
        completedTodos,
        add,
        remove,
        changeStatus
    };
}
