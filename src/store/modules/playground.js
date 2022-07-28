export default {
    state: {
        productList: []
    },
    getters: {
        getProductList: (state) => state.productList
    },
    mutations: {
        setProductList: function (state, value) {
            state.productList = value
        }
    },
    actions: {
        actionToGetProductList: ({ commit }, { success }) => {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(res => {
                    commit('setProductList', res['products'])
                    success && success(res)

                })
        }
    }
}