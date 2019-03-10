export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {
    addTodo(state, todo) {
        state.todos.push(todo)
        // plugins 插件保存缓存不起作用，可以放在这里...
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    },
    removeTodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
    },
    // 编辑todo选项
    editTodo(state, { todo, text = todo.text, done = todo.done }) {
        todo.text = text
        todo.done = done
    },
}
