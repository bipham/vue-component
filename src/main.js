import Vue from 'vue'
import App from './App.vue'
import ImageScaleCenter from './components/templates/ImageScaleCenter.vue'
import Product from './components/templates/Product.vue'
import ImageBook from './components/templates/ImageBook.vue'
import Alert from './components/templates/Alert.vue'

Vue.component('ImageScaleCenter', ImageScaleCenter)
Vue.component('Product', Product)
Vue.component('ImageBook', ImageBook)
Vue.component('Alert', Alert)

new Vue({
  el: '#app',
  render: h => h(App)
})
