<template>
    <div class="card product-item" :class="classItem" :title="titleCard">
        <div class="card-img-feature">
            <ImageScaleCenter classOuter="img-product-outer" src="./../../src/assets/imgs/asus.jpg" alt=""></ImageScaleCenter>
        </div>
        <div class="card-block">
            <div class="basic-info">
                <div class="title-product">
                    {{ title }}
                </div>
                <div class="price-product">
                    {{ price }}
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
</script>

<style scoped>
    @import "./../styles/Product.css";
</style>