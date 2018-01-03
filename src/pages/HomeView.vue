<template>
    <div class="row">
        <!--// <Product classItem="col-md-3" :salePrice="134000" :originalPrice="140000" :showPercentSale="true" :prefix="false" titleProduct="    asus pro 2017 new    " src="./../../src/assets/imgs/asus.jpg" alt=""></Product>-->
        <Product
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :titleProduct="product.title"
                :src="product.image"
                :alt="product.title"
                :originalPriceProduct="product.price"
                :salePrice="product.price_sale"
                classItem="col-md-3"
                :prefix="false"
                :showPercentSale="true"
        />
    </div>
</template>

<script>
    export default {
        computed: {
            products() { return this.$store.getters.products; },
            inCart() { return this.$store.getters.inCart;}
        }
    }
</script>