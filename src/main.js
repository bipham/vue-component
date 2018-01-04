import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './route'
import Product from './components/templates/Product.vue'
import ImageBook from './components/templates/ImageBook.vue'
import Alert from './components/templates/Alert.vue'
import ImageScaleCenter from './components/templates/ImageScaleCenter.vue'
import ShoppingCart from './components/templates/ShoppingCart.vue'
import SlideItem from './components/templates/SlideItem.vue'
import ItemImageCenter from './components/templates/ItemImageCenter.vue'
import Gallery from './components/templates/Gallery.vue'
import ProductDetail from './components/templates/ProductDetail.vue'

Vue.component('Product', Product)
Vue.component('ImageBook', ImageBook)
Vue.component('Alert', Alert)
Vue.component('ImageScaleCenter', ImageScaleCenter)
Vue.component('ShoppingCart', ShoppingCart)
Vue.component('SlideItem', SlideItem)
Vue.component('ItemImageCenter', ItemImageCenter)
Vue.component('Gallery', Gallery)
Vue.component('ProductDetail', ProductDetail)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
