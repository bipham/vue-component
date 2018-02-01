/**
 * Created by nobikun1412 on 29/01/2018.
 */
import axios from 'axios';
export default {
    data() {
      return {
          bTable: {},
          optionsTable: {},
          tfoot: '',
      }
    },
    props: {
        // ['id', 'tableData', 'tableColumn', 'otherOptions', 'static'],
        id: {
            type: String,
            required: true
        },
        tableData: {
            type: Object/Array,
        },
        tableColumn: {
            type: Object/Array,
        },
        static: {
            type: Boolean,
            default: true
        },
        otherOptions: {
            type: Object/Array,
        },
        calcSum: {
            type: Array,
        }
    },
    computed: {
      options() {
          this.optionsTable = {}
          this.optionsTable.data = this.tableData
          this.optionsTable.columns = this.tableColumn
          this.optionsTable = Object.assign(this.optionsTable, this.otherOptions)
          return this.optionsTable;
      },
    },
    watch: {
        'otherOptions': function() {
            this.reRender()
        },
        'tableColumn': function () {

        }
    },
    beforeUpdate() {
    },
    created() {
        console.log('beforeCreate')
    },
    mounted() {
        let id = this.id
        for (let i = 0; i < this.tableColumn.length; i++) {
            $('#' + id + ' tfoot tr').append(`<th></th>`)
        }
        this.bTable = $('#' + id).DataTable(this.options)
        this.autoCalc()
        this.clickCell()

    },
    updated() {
        console.log('updated')
        let id = this.id
        if (this.static) {
             this.bTable.clear()
                .rows.add(this.tableData)
                .draw();
            console.log('updated')
        }
        else {
            this.bTable.destroy();
            $('#' + id).empty(); // empty in case the columns change
            this.bTable = $('#' + id).DataTable(this.options);
        }
        this.autoCalc()
    },
    methods: {
        reRender() {
            console.log('render')
            let id = this.id
            this.bTable.destroy();
            $('#' + id + ' tfoot tr th').empty();
            this.tfoot = $('#' + id + ' tfoot');
            $('#' + id).empty(); // empty in case the columns change
            $('#' + id).append(this.tfoot)
            this.bTable = $('#' + id).DataTable(this.options);
            this.clickCell()
        },
        autoCalc() {
            // $('#' + id + ' tbody').on( 'click', 'td', function (e) {

            // } );
                // Remove the formatting to get integer data for summation
                let intVal = function ( i ) {
                    return typeof i === 'string' ?
                        i.replace(/[VND,\$]/g, '')*1 :
                        typeof i === 'number' ?
                            i : 0;
                };
            $( this.bTable.column( 0 ).footer() ).html(
                'Total: '
            );
            // Total over all pages
            for (let i = 0; i < this.calcSum.length; i++) {
                if (this.calcSum[i].type == 'number') {
                    let total = this.bTable
                        .column( this.calcSum[i].col )
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );

                    // Total over this page
                    // let pageTotal = this.bTable
                    //     .column( this.calcSum[i].col, { page: 'current'} )
                    //     .data()
                    //     .reduce( function (a, b) {
                    //         return intVal(a) + intVal(b);
                    //     }, 0 );

                    // Update footer
                    let currency;
                    ((this.calcSum[i].currency == null || this.calcSum[i].currency == 'undefined')) ? currency = '' : currency = this.calcSum[i].currency;
                    $( this.bTable.column( this.calcSum[i].col ).footer() ).html(
                        currency + total
                    );
                }
                else {
                    let total = this.bTable
                        .column( this.calcSum[i].col )
                        .data()
                        .reduce( function (total, e) {
                            if (Boolean(e)) {
                                return total + 1;
                            }
                            else return total;
                        }, 0 );

                    // Total over this page
                    // let pageTotal = this.bTable
                    //     .column( this.calcSum[i].col, { page: 'current'} )
                    //     .data()
                    //     .reduce( function (total, e) {
                    //         if (Boolean(e)){
                    //             return total + 1;
                    //         }
                    //         else return total;
                    //     }, 0 );

                    // Update footer
                    $( this.bTable.column( this.calcSum[i].col ).footer() ).html(
                        total
                    );
                }
            }
        },
        clickCell() {
            let id = this.id
                // .on( 'init.dt', function () {
                //     console.log( 'Table initialisation complete: '+new Date().getTime() );
                //     $('td.editable').append(`<i class="fas fa-pencil-alt"></i>`)
                // })
            $(document).click(function() {
                $('td.selected_cell').removeClass('selected_cell')

            });
            $('#' + id + ' tbody').on( 'click', 'td.editable', function (e) {
                let btable = $('#' + id).DataTable();
                let data_cell = btable.cell( this ).data();
                let columns = btable.settings().init().columns;
                //get the index of the clicked cell
                let colIndex = btable.cell(this).index().column;

                //Get data of row:
                let data_row = btable.row( this ).data();

                if (!$(this).hasClass('selected_cell')) {
                    $('td.selected_cell .update-cell').hide()
                    $('td.selected_cell').removeClass('selected_cell')
                    if ($(this).has('input').length) {
                        $(this).addClass('selected_cell')
                    }
                    else {
                        $(this).addClass('selected_cell')
                        $(this).wrapInner( "<div class='data_cell'></div>");
                        $(this).append('<input class="update_cell" type="text" value="' + data_cell + '" name="' + columns[colIndex].name + '"><button type="button" class="btn-update-cell btn-sm btn-primary">Update</button>')
                        $('button').on('click', function () {
                            $("#" + id + " .overlay-table").removeClass('hidden')
                            let new_val = $('.selected_cell input').val().trim()
                            // function read_object(obj, prop) {
                            //     return obj[prop];
                            // }
                            let name = columns[colIndex].name;
                            // let res = name.split(".");
                            let new_data_row = data_row
                            // let data_edit;
                            // for (let i = 0; i < res.length; i++) {
                            //     data_edit = read_object(new_data_row[res[i]])
                            // }
                            // let new_val = $('.selected_cell input').val().trim()
                            new_data_row[name] = new_val;
                            axios.put('https://api.mlab.com/api/1/databases/vue-online-shop/collections/Product/' + data_row._id.$oid + '?apiKey=DqZnVxBibhCJwhNpj3XRwP7N5SuXaazT&pretty=true', new_data_row)
                                .then(response => {
                                    $('.selected_cell .data_cell').html(new_val)
                                    $('td.selected_cell').removeClass('selected_cell')
                                    $("#" + id + " .overlay-table").addClass('hidden')
                                })
                                .catch(e => {
                                    $("#" + id + " .overlay-table").addClass('hidden')
                                    alert('Please check data')
                                })
                        })
                    }
                }
                event.stopPropagation();
            } );

            // $('#' + id + ' tbody').on( 'click', 'tr', function (e) {
            //     let btable = $('#' + id).DataTable();
            //     let data_cell = btable.row( this ).data();
            //     alert(JSON.stringify(data_cell))
            //     alert(data_cell.author.name)
            // } );
        }
    },
}