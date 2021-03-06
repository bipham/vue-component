import Vue from 'vue'
import Router from 'vue-router'

//Views:
import HomeView from './pages/templates/HomeView.vue'
import NotFoundView from './pages/templates/NotFound.vue'
import ProductDetailView from './pages/templates/ProductDetailView.vue'
import CheckOutView from './pages/templates/CheckoutView.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '*', name: 'NotFound', component: NotFoundView },
        { path: '/:id', name: 'product', component: ProductDetailView },
        { path: '/checkout/', name: 'Checkout', component: CheckOutView }
    ],
    mode: 'hash',
    base: window.location.href
})