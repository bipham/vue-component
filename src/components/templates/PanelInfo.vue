<template>
    <div class="panel panel-white">
        <div class="panel-body">
            <div class="panel-heading">
                <slot name="title"></slot>
            </div>
            <div class="panel-body">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import PanelInfo from './../scripts/PanelInfo'
    export default PanelInfo
</script>

<style scoped>
    @import "./../styles/PanelInfo.css";
</style>