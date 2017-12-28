<template>
    <div class="img-outer" :class="classOuter">
        <a class="img-inner">
            <img class="img-scale-center" :class="classImg" :src="src" :alt="alt">
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