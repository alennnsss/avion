<script setup>
const props = defineProps({
    cartCount: {
        type: Number,
        default: 0
    }
})

</script>
<template>
    <header class="header-container">
        <div class="header-top">
            <div class="header-left">
                <img src="../assets/icons/search.png" alt="Search" class="icon" />
            </div>
      
            <div class="avion">Avion</div>
      
            <div class="header-right">
                <img src="../assets/icons/cart.png" alt="Cart" class="icon" />
                <img src="../assets/icons/profile.png" alt="Profile" class="icon" />
            </div>
        </div>
        <div class="border">

        </div>
        <nav class="nav">
            <div class="cart" v-if="props.cartCount > 0">
                {{ props.cartCount }} Cart
            </div>
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
        </nav>
        <div class="hero-block">
            <div class="hero-block__info">
                <div class="hero-block__attribute1">
                    <h1>
                        Luxury homeware for people who love timeless design quality
                    </h1>
                    <span>
                        Shop the new Spring 2022 collection today
                    </span>
                </div>    
                <div class="hero-block__attribute2">
                    <button>
                        View Collection
                    </button>
                </div>  
            </div>     
        </div>
    </header>
</template>
<style scoped>
    h1 {
        font-weight: 400;
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
        width: 1400px;
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