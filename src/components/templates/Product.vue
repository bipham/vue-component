<template>
    <div class="card product-item" :class="classItem" :title="titleCard">
        <div class="card-img-feature">
            <ImageScaleCenter :src="src" :classImg="classImg" :classOuter="classOuter" :alt="alt"></ImageScaleCenter>
            <slot name="titleCustom"></slot>
        </div>
        <div class="card-block">
            <div class="basic-info">
                <div class="title-product">
                    {{ title }}
                </div>
                <div class="price-product">
                    <span class="current-price">
                        {{ price }}
                    </span>
                    <span class="original-price">
                        {{ originalPrice }}
                    </span>
                    <span class="sale-percent" v-if="showPercentSale">
                        {{ salePercent }}
                    </span>
                </div>
            </div>
        </div>
        <div class="card-footer">

        </div>
    </div>
</template>

<script>
    import Product from './../scripts/Product'
    export default Product
//    import ImageScaleCenter from './components/templates/ImageScaleCenter.vue'
//    Vue.component('ImageScaleCenter', ImageScaleCenter)
</script>

<style scoped>
    @import "./../styles/Product.css";
</style>