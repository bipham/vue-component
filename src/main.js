import Vue from 'vue'
import App from './App.vue'
import Product from './components/templates/Product.vue'
import ImageBook from './components/templates/ImageBook.vue'
import Alert from './components/templates/Alert.vue'
import ImageScaleCenter from './components/templates/ImageScaleCenter.vue'

Vue.component('Product', Product)
Vue.component('ImageBook', ImageBook)
Vue.component('Alert', Alert)
Vue.component('ImageScaleCenter', ImageScaleCenter)

new Vue({
  el: '#app',
  render: h => h(App)
})
