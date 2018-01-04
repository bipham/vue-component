<template>
    <div class="product-detail row">
        <div class="col-md-6 gallery-area">
            <Gallery classGallery="gallery-custom">
                <div slot="preview" class="slider-for">
                    <ImageScaleCenter v-for="image in gallery"
                                      :key="image.id"
                                      :id="image.id"
                                      :src="image.image"
                                      :alt="image.title">

                    </ImageScaleCenter>
                </div>
                <div slot="thumbnail" class="slider-nav">
                    <ImageScaleCenter v-for="image in  "
                                      :key="image.id"
                                      :id="image.id"
                                      :src="image.image"
                                      :alt="image.title">

                    </ImageScaleCenter>
                </div>
            </Gallery>
        </div>
        <div class="col-md-6 info-area">

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