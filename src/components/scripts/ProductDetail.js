export default {
    props: {
        gallery: Array,
        titleProduct: String,
        salePrice: Number,
        originalPriceProduct: Number,
        src: String,
        classOuter: String,
        classImg: String,
        alt: String,
        currency: {
            type: String,
            default: '$'
        },
        prefix: {
            type: Boolean,
            default: true
        },
        showPercentSale: {
            type: Boolean,
            default: false
        },
        description: String,
        category: String,
        id: Number
    },
    computed: {
        title() {
            return this.reFormatTitle(this.titleProduct.trim())
        },
        price() {
            return this.formatPrice(this.salePrice, this.currency, this.prefix)
        },
        originalPrice() {
            return this.formatPrice(this.originalPriceProduct, this.currency, this.prefix)
        },
        salePercent() {
            return this.calcSalePercent(this.salePrice, this.originalPriceProduct, this.showPercentSale)
        }
    },
    methods: {
        reFormatTitle(str) {
            str = str.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })
            if (str.length > 30) {
                str = str.substring(0, 30).split(" ").slice(0, -1                                                                                                                                                                                                                                                                                                                                                                                   ).join(" ") + "...";
            }
            return str;
        },
        formatPrice(price, currency, prefix) {
            if (price) {
                if (prefix) {
                    return currency + '' + price
                }
                else {
                    return price + '' + currency
                }
            }
        },
        calcSalePercent(sale_price, original_price, showPercentSale) {
            if (sale_price && original_price && showPercentSale) {
                let sale_percent = (1 - sale_price/original_price) * 100
                return '-' + Math.round(sale_percent,0) + '%'
            }

        },
        addToCart(id) {
            this.$store.dispatch('addToCart', id)
        }
    }
}