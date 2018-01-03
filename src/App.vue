<template>
  <div id="app">
    <ShoppingCart />
    <router-view></router-view>
  </div>
</template>

<script>
    import axios from 'axios';
export default {
  name: 'app',
    mounted() {
        axios.get('https://api.mlab.com/api/1/databases/vue-online-shop/collections/book/5a4cb159f36d287384b0e21f?apiKey=DqZnVxBibhCJwhNpj3XRwP7N5SuXaazT')
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>

<style>
  .slick-slide img {
    display: inline-block;
  }
</style>
