<template>
    <div class="card product-item" :class="classItem" :title="titleCard">
        <div class="card-img-feature">
            <ImageScaleCenter :src="src" :classImg="classImg" :classOuter="classOuter" :alt="alt"></ImageScaleCenter>
            <slot name="mediaCard"></slot>
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
                        <del>{{ originalPrice }}</del>
                    </span>
                    <span class="sale-percent" v-if="showPercentSale">
                        {{ salePercent }}
                    </span>
                </div>
            </div>
            <slot name="blockCard"></slot>
        </div>
        <div class="card-footer">
            <div class="action-center">
                <button type="button" class="btn btn-primary" @click="addToCart(id)">Add To Card</button>
            </div>
            <slot name="footerCard"></slot>
        </div>
    </div>
</template>

<script>
    import Product from './../scripts/Product'
    export default Product
</script>

<style scoped>
    @import "./../styles/Product.css";
</style>