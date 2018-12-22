// 1. 对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
// 2. 命名空间概念(多模块分离开发理解重点)
// 默认情况下，模块内部的 action、mutation 和 getter 是注册在【全局命名空间】的——这样使得多个模块能够对同一 mutation 或 action 作出响应
// 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块，
// 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
const counter = {
    namespaced: 'counter',
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        },
        decrement(state) {
            state.count--
        },
    },
    actions: {
        increment: ({ commit, state }) => {
            commit('increment')
            console.log(state.count, 'increment,count=======')
        },
        decrement: ({ commit, state }) => {
            commit('decrement')
            console.log(state.count, 'decrement,count=======')
        },
        incrementIfOdd({ commit, state }) {
            console.log(state.count, '====state.count =====')
            if ((state.count + 1) % 2 === 0) {
                commit('increment')
            }
        },
        incrementAsync({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('increment')
                    resolve()
                }, 1000)
            })
        },
    },
    getters: {
        evenOrOdd: (state) => {
            if (state.count % 2 === 0) {
                return 'even'
            }
            return 'odd'
        },
    },
};
export default counter
