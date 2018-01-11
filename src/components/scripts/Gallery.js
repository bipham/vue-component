export default {
    props: {
        classGallery: {
            type: String
        },
        options: {
            default() {
                return {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true
                }
            }
        }
    },
    mounted() {
        this.reSetSlick()
        $('.gallery.' + this.classGallery + ' .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.gallery.' + this.classGallery + ' .slider-nav'
        });
        this.options.asNavFor = '.gallery.' + this.classGallery + ' .slider-for'
        $('.gallery.' + this.classGallery + ' .slider-nav').slick(this.options);
    },
    methods: {
        reSetSlick() {
            // $('.gallery.' + this.classGallery + ' .slider-for').slick('unslick')
            // $('.gallery.' + this.classGallery + ' .slider-nav').slick('unslick')
        }
    }
}