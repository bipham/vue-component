/**
 * Created by nobikun1412 on 29/12/2017.
 */
export default {
    props: ['dismissible', 'type', 'classAlert', 'icon', 'message'],
    computed: {
        classes() {
            return (this.type ? 'alert-' + this.type + ' ' + this.classAlert : 'alert-danger ' + this.classAlert)
        },
        isIcon() {
            return (this.icon ? true : false)
        }
    }
}