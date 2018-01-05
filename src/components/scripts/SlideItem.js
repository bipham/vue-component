export default {
    props: {
      options: {
          default() {
              return {
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          }
      },
        message: {
          type: String,
            default: 'Hello word'
        },
        classSlider: {
          type: String,
            // required: true
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
        },
        updateData: {
          type: Number,
            default() {
                return 0
            }
        }
    },
    watch: {
        updateData () {
            return this.reSetSlick()
        }
    },
   methods: {
        reSetSlick() {
            $('.slider-items.' + this.classSlider + ' .slider').slick("unslick")
        }
   },
    updated() {
        if (this.classSlider) {
            $('.slider-items.' + this.classSlider + ' .slider').not('.slick-initialized').slick(this.options)
        }
        else {
            $('.slider').not('.slick-initialized').slick(this.options)
        }
    }
}