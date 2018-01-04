<template>
    <div class="item-book-img">
        <div class="item-outer" :class="itemOuter">
            <div class="book-item" :class="bookItem">
                <div class="book-image" :class="bookImage">
                    <img class="image-cover-book" :class="imgCoverBook" :src="src" :alt="alt">
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