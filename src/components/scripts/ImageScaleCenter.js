export default {
    // props: ['classOuter', 'classImg', 'src', 'alt']
    props: {
        classOuter: String,
        classImg: String,
        src: String,
        alt: String,
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '250px'
        }
    }
}
