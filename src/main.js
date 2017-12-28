import Vue from 'vue'
import App from './App.vue'
import ImageScaleCenter from './components/templates/ImageScaleCenter.vue'
import Product from './components/templates/Product.vue'

Vue.component('ImageScaleCenter', ImageScaleCenter)
Vue.component('Product', Product)

new Vue({
  el: '#app',
  render: h => h(App)
})
