<template>
    <div class="slider-items" :class="classSlider">
        <div class="title-slider">
            <h6 class="title" :style="{color: colorTitle, 'text-align': textAlign}">
                {{ titleSlider }}
            </h6>
            <slot name="title"></slot>
        </div>
        <div class="slider">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import SlideItem from './../scripts/SlideItem'
    export default SlideItem
</script>

<style scoped>
    @import "./../styles/SlideItem.css";
</style>