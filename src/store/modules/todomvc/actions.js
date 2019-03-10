export default {
    addTodo({ commit }, text) {
        console.log(text, 'actions text param')
        commit('addTodo', {
            text,
            done: false,
        })
    },
    toggleAll({ commit, state }, done) {
        console.log('toggleAll', done)
        state.todos.forEch((todo) => {
            commit('editTodo', { todo, done })
        })
    },
    // 删除TODO选项
    removeTodo({ commit }, todo) {
        commit('removeTodo', todo)
    },
    // 反选TODO选项
    toggleTodo({ commit }, todo) {
        commit('editTodo', { todo, done: !todo.done })
    },
    // 编辑TODO选项
    editTodo({ commit }, { todo, value }) {
        commit('editTodo', { todo, text: value })
    },

}
