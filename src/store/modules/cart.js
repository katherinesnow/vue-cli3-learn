const cart = {
    namespaced: 'cart',
    state: {
        items: [],
        checkoutStatus: null,
    },
    actions: {
        addProductToCart({ commit, state }, product) {
            commit('setCheckoutStatus', null)
            // 判断库存
            if (product.inventory > 0) {
                const cartItem = state.items.find(item => item.id === product.id)
                if (!cartItem) {
                    commit('pushProductToCart', { id: product.id })
                } else {
                    commit('incrementItemQuantity', cartItem)
                }

                // remove 1 item from stock
                commit('products/decrementProductInventory', {
                    id: product.id,
                }, { root: true })
            }
        },
    },
    mutations: {
        setCheckoutStatus(state, status) {
            state.setCheckoutStatus = status
        },
        // 购物车没有要添加的商品时
        // 这这里添加购物车的商品状态只保留了id 和添加的数量，对于其他商品属性并没有保存
        // 你也可以可以保存商品的所有属性
        pushProductToCart(state, { id }) {
            state.items.push({
                id, quantity: 1,
            })
            console.log(state.items, '999999')
        },
        // 购物车存在有要添加的商品时
        incrementItemQuantity(state, { id }) {
            const cartItem = state.items.find(item => item.id === id)
            cartItem.quantity += 1
        },
    },
    /**
     * [getters 注意getters的对象函数的参数不是传递的对象，所以不能用解构写法，否则找不到state， getters对象函数的参数是有书顺序的]
     * @type {Object}
     */
    getters: {
        /**
         * [cartProducts 重新计算购物车要显示的数据列表]
         * @param  {[type]} options.state     [description]
         * @param  {[type]} options.getters   [description]
         * @param  {[type]} options.rootState [description]
         * @return {[type]}                   [description]
         */
        cartProducts: (state, getters, rootState) => {
            console.log(state, 'state.items===', rootState, getters)
            // 这里使用了rootState 的属性，可以在多模块情况下，获取其他模块下的State下的数据.
            return state.items.map(({ id, quantity }) => {
                const product = rootState.products.all.find(_product => _product.id === id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity,
                }
            })
        },
        /**
         * [cartTotalPrice 购物车商品总价]
         * @return {[type]} [description]
         */
        cartTotalPrice: (state, getters) => {
            console.log(state)
            // if (getters.cartProducts.length === 0) return 0
            // 注意数组reduce的用法
            // @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%E5%8F%82%E6%95%B0
            // A. 累加对象数组里的值(也就是数组元素是对象，而不是数字类型的元素)
            // 要累加对象数组中包含的值，必须提供初始值，以便各个item正确通过你的函数
            // 如果没有提供初始值，则使用数组的第一个元素, 输出的结果不是自己期望的数字，而是一个对象
            // 且在没有初始值的空数组上调用 reduce 将报错
            return getters.cartProducts.reduce((total, product) => {
                console.log(total)
                return total + product.price * product.quantity
            }, 0)
        },
    },
}
export default cart
