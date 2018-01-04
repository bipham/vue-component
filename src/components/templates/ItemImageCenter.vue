<template>
    <div class="row item-image-center" :class="classItem">
        <div class="col-md-4 float-left left-column">
            <slot name="leftColumn"></slot>
        </div>
        <div class="col-md-4 float-left center-column">
            <ImageScaleCenter :src="src" :classImg="classImg" :classOuter="classOuter" :alt="alt" :height="height" :width="width"></ImageScaleCenter>
            <slot name="centerColumn"></slot>
        </div>
        <div class="col-md-4 float-right right-column">
            <slot name="rightColumn"></slot>
        </div>
    </div>
</template>

<script>
    import ItemImageCenter from './../scripts/ItemImageCenter'
    export default ItemImageCenter
</script>

<style scoped>
    @import "./../styles/ItemImageCenter.css";
</style>