import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    products: [
            { id: 1, title: 'An Item', image: '//placehold.it/200', price: 140000, price_sale: 120000 },
            { id: 2, title: 'Thing', image: '//placehold.it/200', price: 169000, price_sale: 90000},
            { id: 3, title: 'Doo-dad', image: '//placehold.it/200', price: 149000, price_sale: 79000 },
            { id: 4, title: 'Other thing', image: '//placehold.it/200', price: 129000, price_sale: 49000 },
        ],
        inCart: [],
    },
    getters: {
        products: state => state.products,
        inCart: state => state.inCart,
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
        }
    }
})
