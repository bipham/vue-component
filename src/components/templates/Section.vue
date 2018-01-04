<template>
    <div class="row-fluid section-original" :id="idSection" :class="classSection">
        <div class="inner-section" :class="classInnerSection">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Section from './../scripts/Section'
    export default Section
</script>

<style scoped>
    @import "./../styles/Section.css";
</style>