<script setup>
import { ref, watch, onMounted } from 'vue'
import { useCartStore } from '../stores/cartStore'
import { useAuthStore } from '../stores/authStore';
const cartStore = useCartStore()
const cart = ref(JSON.parse(localStorage.getItem('avion-cart')) || [])
const authStore = useAuthStore()
</script>
<template>
    <header class="header-container">
        <div class="header-top">
            <div class="header-left">
                <img src="../assets/icons/search.png" alt="Search" class="icon" />
            </div>
      
            <div class="avion">Avion</div>
      
            <div class="header-right">
                <router-link to="/cartview">
                    <div class="cart-wrapper">
                        <img src="../assets/icons/cart.png" alt="Cart" class="icon" />
                        <span class="cart-badge" v-if="cartStore.totalItemsCount > 0">
                            {{cartStore.totalItemsCount}}
                        </span>
                    </div>
                </router-link>        
                <img src="../assets/icons/profile.png" alt="Profile" class="icon" />
            </div>
        </div>
        <div class="border">

        </div>
        <nav class="nav">
            
            <router-link to="#">
                Plant pots
            </router-link>
            <router-link to="#">
                Ceramics
            </router-link>
            <router-link to="#">
                Tables
            </router-link>
            <router-link to="#">
                Chairs
            </router-link>
            <router-link to="#">
                Crokery
            </router-link>
            <router-link to="#">
                Tableware
            </router-link>
            <router-link to="#">
                Cutlery
            </router-link>
            <router-link to="login" v-if="authStore.isAuthenticated !== true">
                Login
            </router-link>
            <router-link to="logout" v-else>
                Logout
            </router-link>
        </nav>
        
    </header>
</template>
<style scoped>
    * {
        font-size: 16px;
    }
    header {
        width: 100%;
    }
    h1 {
        font-weight: 400;
    }
    .avion-button {
        background-color: none;
        max-width: 100px;
    }
    .hero-block__info {
        background-color: white;
        width: 630px; 
        height: 444px;
        display: flex;
        flex-direction: column;
        margin-left: 750px;
        gap: 200px;
        padding: 48px 61px 46px 56px;
    }
    .cart-wrapper {
        position: relative;
        align-items: center;
        justify-content: center;
    }
    .cart-badge {
        position: absolute;
        top: -0.4rem;
        right: -0.57rem;
        background-color: red;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1rem;
        width: 1.1rem;
    }
    .header-top {
        display: flex;
        align-items: center;
        padding: 25px 80px;
        border-bottom: 1px solid #F9F9F9;
        justify-content: space-between;
    }
    .header-left {
        display: flex;
        justify-content: flex-start;
    }
    .hero-block__attribute1 {
        gap: 40px;

    }
    .hero-block {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 1440px;
        height: 704px;
        background-image: url(../assets/icons/background-image.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-color: white;
    }
    router-link {
        max-width: 100px;
    }
    .border {
        width: 1386px;
        margin: 0 auto;
        height: 1px;
        background-color: #3c3b42;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        padding: 25px 80px;
        background-color: white;
        border: none;
        margin: 0 auto;
        gap: 44px;
        width: 1000px;
    }
    .avion {
        font-size: 24px;
        color: #22202E;
        text-align: center;
    }

    .logo {
        font-size: 24px;
        color: #22202E;
        display: flex;
        justify-content: space-around;
    }
    .nav a {
        text-decoration: none;
        color: #726E8D;
    }
    .icons {
        display: flex;
        margin-right: 20px;
    }

    /* .nav {
        display: flex;
        gap: 44px;
    } */

</style>