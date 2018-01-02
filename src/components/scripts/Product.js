export default {
    props: ['classItem', 'titleProduct', 'priceProduct'],
    computed: {
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
            if (str.length > 30) {
                str = str.substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
            }
            return str;
        }
    }
}