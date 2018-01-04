<template>
    <div class="gallery" :class="classGallery">
        <slot name="preview"></slot>
        <slot name="thumbnail"></slot>
    </div>
</template>

<script>
    import Gallery from './../scripts/Gallery'
    export default Gallery
</script>

<style scoped>
    @import "./../styles/Gallery.css";
</style>