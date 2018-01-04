<template>
    <div class="row">
        <ProductDetail :gallery="gallery"></ProductDetail>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                gallery: []
            }
        },

        mounted () {
            axios.get('https://api.mlab.com/api/1/databases/vue-online-shop/collections/book?apiKey=DqZnVxBibhCJwhNpj3XRwP7N5SuXaazT')
                .then(response => {
                    this.gallery = response.data
                    console.log(this.products)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>