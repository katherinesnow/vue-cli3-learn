import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'
import todomvc from './modules/todomvc'
// Vuex 是Vue的一个第三方插件，来对Vue 的状态进行管理.
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  // 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象.
  // 当应用变得非常负责时，store 对象就有可能变得相当臃肿.
  modules: {
    counter, // counter: counter
    todomvc, // todomvc: todomvc
  },
});
console.log(store.state, 'store/index.js modules state value???')
// store.state.counter // counter 模块的状态
// store.state.todomvc // todomvc 模块的状态
// output
// {
//      counter:{ count: 0 },
//      todomvc: { list: [] }
// }
// 也就是说如果使用了modules，在store 外部外直接使用state时要指明要调用的哪个模块中的state.
export default store
