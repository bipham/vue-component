import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        products: [],
        inCart: [],
        productItem: {}
    },
    getters: {
        products: state => state.products,
        inCart: state => state.inCart,
        productItem: state => state.productItem,
    },
    mutations: {
        ADD_TO_CART(state, id) {
            if (state.inCart.length == 0) {
                state.inCart.push({
                    "id": id,
                    "quantity": 1
                })
            }
            else {
                let i
                let key = null
                for (i = 0; i < state.inCart.length; i++) {
                    if (state.inCart[i]['id'] === id) {
                        key = i;
                        break;
                    }
                }
                if (key != null) {
                    state.inCart[i]['quantity']+=1;
                }
                else {
                    state.inCart.push({
                        "id": id,
                        "quantity": 1
                    })
                }
            }
        },
        REMOVE_FROM_CART(state, index) {
            state.inCart.splice(index, 1)
        },
        UPDATE_QUANTITY(state, data) {
            state.inCart[data.index]['quantity'] = data.value;
        },
        UPDATE_PRODUCTS_STOCK(state, new_products) {
            new_products.map((new_product) => {
                state.products.push(new_product)
            });
        }
    },
    actions: {
        addToCart(context, id) {
            context.commit('ADD_TO_CART', id)
        },
        removeProductFromCart(context, index) {
            context.commit('REMOVE_FROM_CART', index)
        },
        updateQuantity(context, data) {
            context.commit('UPDATE_QUANTITY', data)
        },
        updateProductsStock(context, new_products) {
            context.commit('UPDATE_PRODUCTS_STOCK', new_products)
        }
    }
})
