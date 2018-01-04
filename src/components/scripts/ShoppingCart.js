export default {
    props: ['id'],
    computed: {
        inCart() {
            return this.$store.getters.inCart;
        },
        numberProducts() {
            return this.getTotalProducts()
        }
        ,
        cart() {
            return this.getDetailCart()
        },
        total() {
            return this.getTotalPrice()
        },
        showCheckout() {
            return (this.getTotalProducts() > 0 ? true : false)
        }
    },
    methods: {
        getDetailCart() {
            return this.$store.getters.inCart.map((cartItem) => {
                return this.$store.getters.products.find((productItem) => {
                    if (cartItem.id === productItem.id) {
                        productItem.quantity = cartItem.quantity;
                        return cartItem = productItem.id
                    }
                });
            });
        },
        getTotalPrice() {
            return this.cart.reduce((acc, cur) => acc + cur.price*cur.quantity, 0);
        },
        getTotalProducts() {
                return this.inCart.reduce((acc, cur) => acc + cur.quantity, 0);
        },
        removeProductFromCart(index) {
            this.$store.dispatch('removeProductFromCart', index)
        },
        updateQuantity(index, value) {
            this.$store.dispatch('updateQuantity', {
                index: index,
                value: parseInt(value)
            })
        }
    }
}