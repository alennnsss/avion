import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/authStore.js'; 
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductView from '../views/ProductView.vue'
import Mistake from '../views/Mistake.vue';
import CartView from '../views/CartView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue';
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
        component: CartView,
        meta: {requiresAuth: true}
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: CheckoutView,
        meta: {requiresAuth: true}
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutView
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
router.beforeEach((to,from) => {
    const authStore = useAuthStore()
    if(to.meta.requiresAuth && !authStore.isAuthenticated) {
        alert('Необходимо авторизоваться')
        return {name: 'home'}
    }
})

export default router