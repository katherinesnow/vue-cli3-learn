<template>
    <ul>
        <li v-for="product in products"
            :key="product.id">
            {{ product.title}} - {{ product.price }}
            <br>
            <button :disabled="!product.inventory"
                @click="addProductToCart(product)"
            >Add to Cart</button>
        </li>
    </ul>
</template>
<script>
import { createNamespacedHelpers, mapActions } from 'vuex'
import products from '@/store/modules/products'

const {
    // mapActions: mapProductActions,
    mapState: mapProductState,
    // mapGetters: maproductListGetters,
} = createNamespacedHelpers(products.namespaced);
export default {
    computed: {
        ...mapProductState({
            products: state => state.all,
        }),
        // OR
        // ...mapState({
        //     products: state => state.products.all,
        // }),
    },
    methods: {
        // ...mapProductActions([
        //     'addProductToCart',
        //     // 'getAllProducts',
        // ]),
        // 在没有使用createNamespacedHelpers的时候使用
        // 前提是import { mapActions } from 'vuex'
        ...mapActions('cart', [
            'addProductToCart',
        ]),
    },
    created() {
        // 在此处调用，以下A | B 两种调用方式均可以~
        // A. 通过mapActions 映射方法调用
        // this.getAllProducts()

        // B. 直接调用分发actions
        this.$store.dispatch('products/getAllProducts')
    },
}
</script>
