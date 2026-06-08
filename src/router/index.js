import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductView from '../views/ProductView.vue'
import Mistake from '../views/Mistake.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView
    },
    {
        path: '/product/:id',
        name: 'product-details',
        component: ProductView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error-404',
        component: Mistake
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router