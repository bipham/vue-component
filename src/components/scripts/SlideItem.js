export default {
    props: {
      options: {
          default: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
        message: {
          type: String,
            default: 'Hello word'
        },
        classSlider: {
          type: String,
            required: true
        },
        titleSlider: {
          type: String
        },
        colorTitle: {
          type: String,
            default: 'rgba(0,0,0,.5)'
        },
        textAlign: {
          type: String,
            default: 'left'
        }
    },
    mounted() {
        $('.slider-items.' + this.classSlider + ' .slider').slick(this.options)
    },
    // computed: {
    //     textAlign() {
    //         return
    //     }
    // }
}