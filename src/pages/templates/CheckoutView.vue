<template>
    <div class="page-checkout">
        <Section idSection="checkoutSection" classInnerSection="checkout-inner row">
            <div class="col-md-6">
                <h6 class="title">
                    Info Order
                </h6>
                <div class="">
                    <form v-on:submit.prevent="handleLoginFormSubmit()">
                        <div class="form-group">
                            <label for="name">
                                Your name
                            </label>
                            <input type="text" class="form-control" placeholder="Your name" id="name" name="name" v-model="name" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">
                                Phone
                            </label>
                            <input type="text" class="form-control" placeholder="0122..." id="phone" name="phone" v-model="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="email">
                                Email
                            </label>
                            <input type="text" class="form-control" placeholder="example@gmail.com" id="email" name="email" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <label for="ship">
                                Address Ship
                            </label>
                            <input type="text" class="form-control" placeholder="Address" id="ship" name="ship" v-model="ship" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-order">Order</button>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub total</th>
                        <th scope="col">Tool</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in cart">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>
                                        <span class="img-thumbnail-product">
                                            <img :src="item.img_feature" />
                                        </span>
                        </td>
                        <td>
                                        <span class="title-product">
                                            {{ item.title }}
                                        </span>
                        </td>
                        <td><input @change="updateQuantity(index, $event.target.value)" :value="item.quantity" type="number" min="1"></td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.price * item.quantity }}</td>
                        <td><button class="btn btn-sm btn-danger" @click="removeProductFromCart(index)">&times;</button> </td>
                    </tr>
                    <tr>
                        <th>Total:</th>
                        <th></th>
                        <th></th>
                        <th>{{ numberProducts }}</th>
                        <th></th>
                        <th>{{ total }}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Section>
    </div>
</template>

<script>
    import axios from 'axios';
    import Router from 'vue-router'
    export default {
        data () {
            return {
                name: '',
                phone: '',
                email: '',
                ship: ''
            }
        },
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
                        if (cartItem.id === productItem.reId) {
                            productItem.quantity = cartItem.quantity;
                            return cartItem = productItem.reId
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
            },
            handleLoginFormSubmit () {
                const postData = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    ship: this.ship,
                    cart: this.cart
                }
                axios({
                    method: 'post',
                    url: 'https://api.mlab.com/api/1/databases/vue-online-shop/collections/order?apiKey=DqZnVxBibhCJwhNpj3XRwP7N5SuXaazT&pretty=true',
                    data: postData
                })
                    .then(response => {
                        this.$store.dispatch('emptyCart')
                        this.$router.push({ name: 'Home' })
                    })
            }
        }
    }
</script>

<style scoped>
    @import "./../css/Checkout.css";
</style>