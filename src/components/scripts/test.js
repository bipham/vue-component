/**
 * Created by nobikun1412 on 31/01/2018.
 */
$(document).ready(function() {
    let id = this.id
    let table = $('#' + id).DataTable(this.options)

    $('#' + id + ' tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        alert('hello: ' + this)
    } );
} );