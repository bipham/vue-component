import Vue from 'vue'
import Router from 'vue-router'

//Views:
import HomeView from './pages/HomeView.vue'
import NotFoundView from './pages/NotFound.vue'
import ProductDetailView from './pages/ProductDetailView.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '*', name: 'NotFound', component: NotFoundView },
        { path: '/:id', name: 'product', component: ProductDetailView }
    ],
    mode: 'hash',
    base: window.location.href
})