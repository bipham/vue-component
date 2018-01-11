import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './route'
import axios from 'axios';
import NProgress from 'nprogress'
// import Slick from 'vue-slick';
import Product from './components/templates/Product.vue'
import ImageBook from './components/templates/ImageBook.vue'
import Alert from './components/templates/Alert.vue'
import ImageScaleCenter from './components/templates/ImageScaleCenter.vue'
import ShoppingCart from './components/templates/ShoppingCart.vue'
import SlideItem from './components/templates/SlideItem.vue'
import ItemImageCenter from './components/templates/ItemImageCenter.vue'
import Gallery from './components/templates/Gallery.vue'
import ProductDetail from './components/templates/ProductDetail.vue'
import Section from './components/templates/Section.vue'

// Vue.component('Slick', Slick)
Vue.component('Product', Product)
Vue.component('ImageBook', ImageBook)
Vue.component('Alert', Alert)
Vue.component('ImageScaleCenter', ImageScaleCenter)
Vue.component('ShoppingCart', ShoppingCart)
Vue.component('SlideItem', SlideItem)
Vue.component('ItemImageCenter', ItemImageCenter)
Vue.component('Gallery', Gallery)
Vue.component('ProductDetail', ProductDetail)
Vue.component('Section', Section)

axios.interceptors.request.use(function (config) {
    NProgress.start();
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
}, function (error) {
    return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
