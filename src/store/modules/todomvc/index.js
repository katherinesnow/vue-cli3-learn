import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'
import plugins from './plugins'

const todomvc = {
    namespaced: 'todomvc',
    state: {
        todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
    },
    mutations,
    actions,
    plugins,
    // plugins 一个数组，包含应用再store 上的插件方法.
    // 这些插件直接接受store 作为唯一参数，可以监听mutation或者提交mutation
    // 注意： 也可以不使用plugins，可以再各自的mutation函数中处理
}
export default todomvc;
