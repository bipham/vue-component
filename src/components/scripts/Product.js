export default {
    props: {
        // ['classItem', 'titleProduct', 'priceProduct', 'src', 'classOuter', 'classImg', 'alt', 'currency', 'prefix', 'showPercentSale'],
        classItem: String,
        titleProduct: String,
        priceProduct: Number,
        originalPriceProduct: Number,
        src: String,
        classOuter: String,
        classImg: String,
        alt: String,
        currency: {
            type: String,
            default: 'VND'
        },
        prefix: {
            type: Boolean,
            default: true
        },
        showPercentSale: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        titleCard() {
            return this.titleProduct.trim()
        },
        title() {
            return this.reFormatTitle(this.titleProduct.trim())
        },
        price() {
            return this.formatPrice(this.priceProduct, this.currency, this.prefix)
        },
        originalPrice() {
            return this.formatPrice(this.originalPriceProduct, this.currency, this.prefix)
        },
        salePercent() {
            return this.calcSalePercent(this.priceProduct, this.originalPriceProduct, this.showPercentSale)
        }
    },
    mounted() {
        $('.your-class').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        })
    },
    methods: {
        reFormatTitle(str) {
            str = str.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })
            if (str.length > 10) {
                str = str.substring(0, 10).split(" ").slice(0, -1).join(" ") + "...";
            }
            return str;
        },
        formatPrice(price, currency, prefix) {
            if (price) {
                if (prefix) {
                    return currency + ' ' + price
                }
                else {
                    return price + ' ' + currency
                }
            }
        },
        calcSalePercent(price, original_price, showPercentSale) {
            if (price && original_price && showPercentSale) {
                let sale_percent = (1 - price/original_price) * 100
                return '-' + Math.round(sale_percent,0) + '%'
            }

        }
    }
}