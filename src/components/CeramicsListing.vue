<script setup>
import chair from "../assets/icons/dandy.png"
import vase from "../assets/icons/vases.png"
import basic from "../assets/icons/basic.png"
import lamp from "../assets/icons/lamp.png"
const products = [
    {
        id:1,
        title: 'The Dandy chair',
        image: chair,
        price: 250
    },
    {
        id:2,
        title: 'Rustic Vase Set',
        image: vase,
        price: 155
    },
    {
        id: 3,
        title: 'The Silky Vase',
        image: basic,
        price: 125
    },
    {
        id: 4,
        title: 'The Lucy Lamp',
        image: lamp,
        price: 399
    } 
]
</script>
<template>
    <div class="products-container">
        <div v-for="product in products" :key="product.id" class="products-box">
            <img :src="product.image" :alt="product.title" class="product-image">
            <h2>{{ product.title }}</h2>
            <p>£{{ product.price }}</p>
        </div>
    </div>
    <div class="view">
        <button>
            View Collection
        </button>
    </div>
</template>
<style scoped>
    .products-container {
        display: flex;
        flex-direction: row;
        width: 1440px;
        padding: 80px 28px 80px 80px;
        gap: 20px;
    }
    .products-box {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .product-image {
        width: 305px;
        height: 375px;
    }
    .view {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        border: none;
        
    }
</style>