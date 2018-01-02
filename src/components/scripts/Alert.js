/**
 * Created by nobikun1412 on 29/12/2017.
 */
export default {
    props: ['dismissible', 'type', 'icon', 'message'],
    computed: {
        classes() {
            console.log(this.type)
            return (this.type ? 'alert-' + this.type : 'alert-danger')
        },
        isIcon() {
            return (this.icon ? true : false)
        },
        // message() {
        //     return message
        // }
    }
}