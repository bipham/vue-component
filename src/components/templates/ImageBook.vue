<template>
    <div class="item-outer" :class="item.itemOuter">
        <div class="book-item" :class="item.bookItem">
            <div class="book-image" :class="item.bookImage">
                <img class="image-cover-book" :class="item.imgCoverBook" :src="item.src" :alt="item.alt">
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