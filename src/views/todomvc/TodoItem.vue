<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import todomvc from '@/store/modules/todomvc'

const {
    mapActions: mapTodoItemActions,
    // mapState: mapTodoItemState,
} = createNamespacedHelpers(todomvc.namespaced);

export default {
    name: 'Todo',
    props: ['todo'],
    data() {
        return {
            editing: false,
        }
    },
    directives: {
        focus(el, { value }, { context }) {
            if (value) {
                context.$nextTick(() => {
                    el.focus()
                })
            }
        },
    },
    methods: {
        ...mapTodoItemActions([
            'toggleTodo',
            'removeTodo',
            'editTodo',
        ]),
        // 完成编辑
        doneEdit(e) {
            const value = e.target.value.trim()
            const { todo } = this
            if (!value) {
                this.removeTodo(todo)
            } else if (this.editing) {
                this.editTodo({
                    todo,
                    value,
                })
                this.editing = false
            }
        },
        // 取消编辑
        cancelEdit(e) {
            e.target.value = this.todo.tex
            this.editing = false
        },
    },
}
</script>
