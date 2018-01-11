<template>
    <div class="product-page">
        <Section idSection="infoProduct" classInnerSection="detail-product">
            <ProductDetail :gallery="product.gallery"
                           :titleProduct="product.title"
                           :src="product.img_feature"
                           :alt="product.title"
                           :originalPriceProduct="product.price"
                           :salePrice="product.price_sale"
                           :prefix="false"
                           :showPercentSale="true"
                           :description="product.description"
                           :category="product.category.name"
                           :id="product.reId"
            ></ProductDetail>
        </Section>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                product: [],
                productId: this.$route.params.id,
            }
        },
        mounted () {
            let inStore = true
            if (inStore) {
                this.$store.getters.products.find((productItem) => {
                    if (this.productId === productItem.reId) {
                        return this.product = productItem
                    }
                })
                inStore = false
            }

            if (!inStore) {
                axios.get('https://api.mlab.com/api/1/databases/vue-online-shop/collections/Product?q={%22reId%22:%20' + this.productId + '}&l=8&apiKey=DqZnVxBibhCJwhNpj3XRwP7N5SuXaazT&pretty=true')
                    .then(response => {
                        this.product = response.data[0]
                        this.updateProductsStock(response.data)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        },
        methods: {
            updateProductsStock(new_products) {
                this.$store.dispatch('updateProductsStock', new_products)
            }
        }
    }
</script>

<style scoped>
    @import "./../css/ProductDetait.css";
</style>