export default {
    props: {
        classGallery: {
            type: String
        },
        options: {
            default() {
                return {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true
                }
            }
        }
    },
    mounted() {
        $('.gallery.' + this.classGallery + ' .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.gallery.' + this.classGallery + ' .slider-nav'
        });
        this.options.asNavFor = '.gallery.' + this.classGallery + ' .slider-for'
        $('.gallery.' + this.classGallery + ' .slider-nav').slick(this.options);
    }
}