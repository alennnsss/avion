import { createRouter, createWebHashHistory } from 'vue-router'; 
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductView from '../views/ProductView.vue'
import Mistake from '../views/Mistake.vue';
import CartView from '../views/CartView.vue';
const routes = [
    {
        path: '/avion',
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
        path: '/cartview',
        name: 'cart',
        component: CartView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error-404',
        component: Mistake
    }
    
]
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router