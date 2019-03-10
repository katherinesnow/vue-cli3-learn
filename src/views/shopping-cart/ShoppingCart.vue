<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products"><i>Please add some products to cart.</i></p>
        <ul>
            <li v-for="product in products"
                :key="product.id">
                {{ product.title }} - {{ product.price }} X {{ product.quantity }}
            </li>
        </ul>
        <p>Total: {{ total }}</p>

    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
import cart from '@/store/modules/cart'

const {
    mapGetters: mapCartGetters,
} = createNamespacedHelpers(cart.namespaced);
export default {
    computed: {
        // ...mapGetters('cart', {
        //     products: 'cartProducts',
        //     total: 'cartTotalPrice',
        // }),
        ...mapCartGetters({
            products: 'cartProducts',
            total: 'cartTotalPrice',
        }),
        // products() {
        //     return this.$store.getters.cartProducts
        // },
    },
}
</script>
