<template>
    <main>
        <router-link to="/catalog">
            Back to shop
        </router-link>
        <div class="empty-cart" v-if="cartStore.items.length === 0">
            <h2>Your cart is empty</h2>
            <router-link to="/catalog" class="shop-btn">
                Explore products
            </router-link>
        </div>
        <div class="cart-box" v-else>
            <div class="products-box">
                <h2>Product</h2>
                <div class="products-box__info" v-for="item in cartStore.items" :key="item.id">
                    <img :src="item.image" :alt="item.title" class="products-box__image">
                    <div class="info">
                        <h2>
                            {{ item.title }}
                        </h2>
                        <p>
                            {{ item.description.length > 20 ? item.description.slice(0, 50) + '...' : item.description }}
                        </p>

                        <p>
                            £{{ item.price }}
                        </p>
                    </div>    
                </div>
                <div class="closing">
                    <h2 class="taxes">
                        Taxes and shipping are calculated at checkout
                    </h2>  
                    <h1>
                        Subtotal £{{ cartStore.totalPrice.toFixed(2) }}
                    </h1>
                    <button>
                        Go to checkout
                    </button>
                </div>      
            </div>
            <div class="quantity-box">
                <h2>Quantity</h2>
                <div class="quantity-item"  v-for="item in cartStore.items" :key="item.id">
                    <div class="number">
                        {{ item.quantity }}
                    </div>
                    <button @click="handleBuyClick(item.id)">
                        Remove
                    </button>
                </div>
            </div>
            <div class="total-box">
                <h2>Total</h2>
                <div class="total-price" v-for="item in cartStore.items" :key="item.id">
                    £{{ (item.price * item.quantity).toFixed(2) }}
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { useCartStore } from '../stores/cartStore';
    const cartStore = useCartStore()
    const handleBuyClick = (id) => {
        cartStore.removeFromCart(id)
    }    
</script>

<style scoped>
    .empty-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px;
        background-color: white;
        margin-top: 20px;
        gap: 20px;
    }
    .shop-btn {
        background-color: #2A254B;
        color: white;
        padding: 12px 32px;
        text-decoration: none;
    }
    router-link {
        text-decoration: none;
        margin: 30px;
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 180px;
        height: 200px;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2A254B;
        color: white;
        width: 172px;
        height: 56px;
        border: none;
    }
    .closing {
        display: flex;
        justify-content: space-around;
        gap: 300px;
    }
    .quantity-item,
    .total-price {
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 44px;
        gap: 10px;
    }
    .taxes {
        color: #4E4D93;
    }
    .quantity-box {
        display: flex;
        flex-direction: column;
        
    }
    main {
        background-color: #F9F9F9;
        padding: 80px 84px;
    }
    .products-box__image {
        width: 109px;
        height: 134px;
        
    }
    .products-box__info {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }
    .cart-box {
        width: 1280px;
        gap: -20px;
        padding: 63px 72px 62px 54px;
        background-color: white;
        display: flex; 
        gap: 110px;
    }
    .products-box {
        display: flex;
        flex-direction: column;
        gap: 44px;
        width: 700px;
    }
    .number {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F9F9F9;
    }
    * {
        font-size: 16px;
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
</style>