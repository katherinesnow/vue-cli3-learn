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

export default {
    // computed: mapGetters([
    //     'evenOrOdd',
    // ]),
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapCounterGetters([
            'evenOrOdd',
        ]),
        // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
        ...mapCounterState([
            // 映射 this.count 为 store.state.count
            'count',
        ]),
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
