<template>
    <div class="b-table-custom">
        <table class="display dataTable" :id="id" width="100%" :static="static" :tableData="tableData" :tableColumn="tableColumn" :otherOptions="otherOptions" :calcSum="calcSum">
            <tbody>

            </tbody>
            <slot></slot>
            <tfoot>
                <tr>

                </tr>
            </tfoot>
            <div class="overlay-table hidden">
                <div class="message-processing">
                    Please wait ...
                    <i class="fa fa-spinner fa-spin fa-fw"></i>
                </div>
            </div>
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