<template>
    <div class="product-detail row">
        <div class="col-md-4 gallery-area">
            <Gallery classGallery="gallery-custom">
                <div slot="preview" class="slider-for">
                    <ImageScaleCenter v-for="image in gallery"
                                      :src="image"
                                      >

                    </ImageScaleCenter>
                </div>
                <div slot="thumbnail" class="slider-nav">
                    <ImageScaleCenter height="75px"
                                      v-for="image in gallery"
                                      :src="image"
                                      >
                    </ImageScaleCenter>
                </div>
            </Gallery>
        </div>
        <div class="col-md-8 info-area">
            <div class="title-product-area">
                <h5 class="title-product-detail">
                    {{ title }}
                </h5>
                <div class="category">
                    Category: <span class="category-name">{{ category }}</span>
                </div>
            </div>
            <hr class="divide-product">
            <div class="basic-info-product">
                <div class="price-product">
                    <span class="current-price">
                        Price: {{ price }}
                    </span>
                    <span class="original-price">
                        <del>{{ originalPrice }}</del>
                    </span>
                    <span class="sale-percent" v-if="showPercentSale">
                        {{ salePercent }}
                    </span>
                </div>
                <div class="description-product">
                    {{ description}}
                </div>
                <div class="action-center">
                    <button type="button" class="btn btn-primary" @click="addToCart(id)">Add To Card</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductDetail from './../scripts/ProductDetail'
    export default ProductDetail
</script>

<style scoped>
    @import "./../styles/ProductDetail.css";
</style>