<template>
    <div class="item-book-img" :class="itemImgBook">
        <div class="item-outer">
            <div class="book-item">
                <div class="book-image">
                    <img class="image-cover-book" :src="src" :alt="alt">
                </div>
                <div class="info">
                    <div class="title">
                        <h6 class="title-book">
                            <router-link :to="{ name: 'product', params: { id: id }}">{{ title }}</router-link>
                        </h6>
                    </div>
                    <div class="author">
                        by  <router-link :to="{ name: 'product', params: { id: id }}">{{ author_name }}</router-link>
                    </div>
                    <div class="price">
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
                    <div class="action">
                        <button type="button" class="btn btn-primary" @click="addToCart(id)">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageBook from './../scripts/ImageBook'
    export default ImageBook
</script>

<style scoped>
    @import './../styles/ImageBook.css';
</style>