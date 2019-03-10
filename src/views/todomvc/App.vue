<style src="todomvc-app-css/index.css"></style>

<template>
    <section class="todoapp">
        <!-- header -->
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo"
                autofocuss
                autocomplete="off"
                placeholder="What neeeds to be done?"
                @keyup.enter='addTodoInput'>
        </header>
        <!-- main section -->
        <section class="main" v-show='todos.length'>
            <!-- {{ !allChecked }} -->
            <input class="toggle-all" id="toggle-all" name="toggle-all"
                type="checkout"
                :checked="allChecked"
                @change="toggleAll(!allChecked)">
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <TodoItem
                  v-for="(todo, index) in filteredTodos"
                  :key="index"
                  :todo="todo"
                />
            </ul>
        </section>

    </section>
</template>
<style scoped>
.todo-list li label {
    text-align: left;
}

</style>
<script>
import { createNamespacedHelpers } from 'vuex' // mapGetters, mapActions, mapState,
import counter from '@/store/modules/todomvc';
import TodoItem from './TodoItem.vue'

const {
    mapActions: mapTodoMvcActions,
    mapState: mapTodoMvcState,
    // mapGetters: mapTodoMvcGetters,
} = createNamespacedHelpers(counter.namespaced);

const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done),
}

export default {
    components: { TodoItem },
    data() {
        return {
            visibility: 'all',
            filters,
        }
    },
    computed: {
        // ...mapTodoMvcState([
        //     'todos',
        // ]),
        ...mapTodoMvcState({
            todos: state => state.todos,
        }),
        allChecked() {
            return this.todos.every(todo => todo.name)
        },
        filteredTodos() {
            return filters[this.visibility](this.todos)
        },
        remaining() {
            return this.todos.filter(todo => !todo.done).length
        },
    },
    methods: {
        // mapActions 多种分发调用方法
        // 将this.addTodo 映射为this.$store.dispatch('addTodo')
        ...mapTodoMvcActions([
            'addTodo',
            // 'toggleAll',
        ]),
        ...mapTodoMvcActions({
            // 将this.toggleAll()映射为this.$store.dispatch('toggleAll')
            toggleAll: 'toggleAll',
        }),
        // 添加todo 选项
        addTodoInput(e) {
            const text = e.target.value
            console.log(text, '====input text value ===')
            if (text.trim()) {
                console.log(222)
                this.addTodo(text)
            }
            e.target.value = ''
        },
    },
    filters: {
    },
}
</script>
