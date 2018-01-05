<template>
    <div class="shopping-card-area">
        <button class="btn btn-info" data-toggle="modal" data-target="#cartModal">
            <i class="fas fa-shopping-cart"></i>
            Cart
            <span class="badge badge-pill badge-danger">{{ numberProducts }}</span>
        </button>
        <button class="btn btn-danger checkout" v-show="showCheckout">
            Checkout
            <!--<router-link :to="{ name: 'checkout', params: { id: id }}">Checkout</router-link>-->
        </button>

        <div id="cartModal" class="modal fade">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Cart</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Check out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShoppingCart from './../scripts/ShoppingCart'
    export default ShoppingCart
</script>

<style scoped>
    @import "./../styles/ShoppingCart.css";
</style>