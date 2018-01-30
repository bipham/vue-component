/**
 * Created by nobikun1412 on 29/01/2018.
 */
export default {
    data() {
      return {
          bTable: {},
          optionsTable: {}
      }
    },
    props: ['id', 'tableData', 'tableColumn', 'otherOptions', 'static'],
    computed: {
      options() {
          this.optionsTable.data = this.tableData
          this.optionsTable.columns = this.tableColumn
          this.optionsTable = Object.assign(this.optionsTable, this.otherOptions)
          console.log('changed')
          return this.optionsTable;
      }
    },
    watch: {
        'tableData': function() {
            if (this.static) {
                this.bTable.clear()
                    .rows.add(this.tableData)
                    .draw();
            }
        },
        'tableColumn': function () {
            let id = this.id
            alert(this.static)
            this.bTable.destroy();
            $('#' + id).empty(); // empty in case the columns change
            this.bTable = $('#' + id).DataTable({
                columns: this.tableColumn
            });
            this.bTable.clear()
                .rows.add(this.tableData)
                .draw();
        }
    },
    beforeUpdate() {

    },
    mounted() {
        let id = this.id
        this.bTable = $('#' + id).DataTable(this.options)
        // this.bTable = $('.dataTable').DataTable( {
        //     data: this.tableData,
        //     columns: this.tableColumn,
        //     "footerCallback": function ( row, data, start, end, display ) {
        //         var api = this.api(), data;
        //
        //         // Remove the formatting to get integer data for summation
        //         var intVal = function ( i ) {
        //             return typeof i === 'string' ?
        //                 i.replace(/[VND,]/g, '')*1 :
        //                 typeof i === 'number' ?
        //                     i : 0;
        //         };
        //
        //         // Total over all pages
        //         let total = api
        //             .column( 3 )
        //             .data()
        //             .reduce( function (a, b) {
        //                 return intVal(a) + intVal(b);
        //             }, 0 );
        //
        //         // Total over this page
        //         let pageTotal = api
        //             .column( 3, { page: 'current'} )
        //             .data()
        //             .reduce( function (a, b) {
        //                 return intVal(a) + intVal(b);
        //             }, 0 );
        //
        //         // Update footer
        //         $( api.column( 3 ).footer() ).html(
        //             '$'+pageTotal +' ( $'+ total +' total)'
        //         );
        //     }
        // } );
    },
    updated() {
    },
    methods: {
        reRenderTable(options) {
            // let id = this.id
            // this.bTable = $('#' + id).DataTable(this.options)
            // alert(this.static)
            // this.bTable.destroy();
            // $('#' + id).empty(); // empty in case the columns change
            // this.bTable = $('#' + id).DataTable(options);
        }
    }
}