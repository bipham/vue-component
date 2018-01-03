import Vue from 'vue'
import Router from 'vue-router'

//Views:
import HomeView from './pages/HomeView.vue'
import NotFoundView from './pages/NotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '*', name: 'NotFound', component: NotFoundView }
    ],
    mode: 'hash',
    base: window.location.href
})