import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import IdeesView from '../views/IdeesView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/productes',
            name: 'productes',
            component: ProductsView
        },
        {
            path: '/idees',
            name: 'idees',
            component: IdeesView
        },
        {
            path: '/contacte',
            name: 'contacte',
            component: ContactView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }
    ]
})

export default router