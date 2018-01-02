export default {
    props: ['classItem', 'titleProduct', 'priceProduct'],
    computed: {
        titleCard() {
            return this.titleProduct.trim()
        },
        title() {
            return this.reFormatTitle(this.titleProduct.trim())
        },
        price() {
            return this.priceProduct
        }
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
        }
    }
}