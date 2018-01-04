<template>
    <div class="img-outer" :class="classOuter" :style="{width: width, height: height}">
        <a class="img-inner" :class="classImg">
            <img class="img-scale-center" :src="src" :alt="alt">
        </a>
    </div>
</template>

<script>
    import ImageScaleCenter from './../scripts/ImageScaleCenter'
    export default ImageScaleCenter
</script>

<style scoped>
    @import "./../styles/ImageScaleCenter.css";
</style>