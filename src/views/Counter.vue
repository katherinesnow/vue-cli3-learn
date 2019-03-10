<template>
    <div class="counter">
        Clicked: {{ count }} times, count is {{ evenOrOdd }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex' // mapGetters, mapActions, mapState,
import counter from '@/store/modules/counter';

const {
    mapActions: mapCounterActions,
    mapState: mapCounterState,
    mapGetters: mapCounterGetters,
} = createNamespacedHelpers(counter.namespaced);

// createNamespacedHelpers创建基于某个命名空间辅助函数,它返回一个对象，
// 对象里有新的绑定在给定命名空间值上的组件绑定辅助函数: mapActions, mapState, mapGetters, mapMutations

export default {
    // computed: mapGetters([
    //     'evenOrOdd',
    // ]),
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapCounterGetters([
            'evenOrOdd',
        ]),
        // 使用vuex 并不意味着你需要将所有的状态放入vuex,虽然讲所有的状态放到vuex会使状态变化更显式和易调用，但也会使代码变得冗长和不直观。
        // 如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
        // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
        ...mapCounterState([
            // 映射 this.count 为 store.state.count
            'count',
        ]),
        // 当store.js 使用了modules时区分模块时，如果没有使用'命名空间'，则必须访问特定模块下的state数据.否则无法访问到数据.
        // count() {
        //     return this.$store.state.counter.count
        // },
    },
    methods: mapCounterActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync',
    ]),
}
</script>
