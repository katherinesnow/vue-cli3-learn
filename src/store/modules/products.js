import shop from '../../api/shop'

const products = {
    namespaced: 'products',
    state: {
        all: [],
    },
    actions: {
        getAllProducts({ commit }) {
            // shop.getAllProducts 模拟了异步接口数据请求结果
            shop.getProducts((_products) => {
                commit('setProducts', _products)
            })
        },
    },
    mutations: {
        setProducts(state, _products) {
            state.all = _products
        },
        decrementProductInventory(state, { id }) {
            const product = state.all.find(_product => _product.id === id)
            product.inventory -= 1
        },
    },
    getters: {
    },
}
export default products
