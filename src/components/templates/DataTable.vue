<template>
    <div class="b-table-custom">
        <table class="display dataTable" :id="id" width="100%" :static="static" :tableData="tableData" :tableColumn="tableColumn" :otherOptions="otherOptions">
            <thead>
                <slot name="thead"></slot>
            </thead>
            <tfoot>
                <slot name="tfoot"></slot>
            </tfoot>
            <slot></slot>
        </table>
    </div>
</template>

<script>
    import DataTable from './../scripts/DataTable'
    export default DataTable
</script>

<style scoped>
    @import "./../styles/DataTable.css";
</style>