import axios from 'axios';
export default {
    name: 'app',
    computed: {
        products() { return this.$store.getters.products; },
        inCart() { return this.$store.getters.inCart;}
    }
}

$(document).ready(function() {
    let nav = $('.menu-header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            nav.addClass("header-fixed");
        } else {
            nav.removeClass("header-fixed");
        }
    });
});