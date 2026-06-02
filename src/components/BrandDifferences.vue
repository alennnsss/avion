<script setup>
import carIcon from '../assets/icons/car.png'
import rightIcon from '../assets/icons/right.png'
import cardIcon from '../assets/icons/card.png'
import plantIcon from '../assets/icons/plant.png'
    const items = [
        {
            id: 1,
            image: carIcon,
            title: 'Next day as standard',
            text: 'Order before 3pm and get your order the next day as standard'
        },
        {
            id: 2,
            image: rightIcon,
            title: 'Made by true artisans',
            text: 'Handmade crafted goods made with real passion and craftmanship'
        },
        {
            id: 3,
            image: cardIcon,
            title: 'Unbeatable prices',
            text: 'For our materials and quality you won’t find better prices anywhere' 
        },
        {
            id: 4,
            image: plantIcon,
            title: 'Recycled packaging',
            text: 'We use 100% recycled to ensure our footprint is more manageable',
        },
    ]

</script>
<template>
    <main>
        <div class="different">
            <h1>
                What makes our brand different
            </h1>
        </div>
        <div class="products-container">
            <div v-for="item in items" :key="item.id" class="products-box">
                <img :src="item.image" :alt="item.title" class="products-box__image">
                <h3 class="products-box__title">{{ item.title }}</h3>
                <p class="products-box__text">
                {{ item.text }}
                </p>
            </div>
        </div>    
    </main>
</template>
<style scoped>
    .different {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 80px 0 36px 0;
    }
    .products-box {
        display: flex;
        flex-direction: column;
        width: 305px;
        height: 244px;
        padding: 60px;
        background-color: #F9F9F9;
    }
    .products-container {
        display: flex;
        flex-direction: row;
        width: 1440px;
        padding: 80px;
        gap: 22px;
    }
    .products-box__image {
        width: 16px;
        height: 16px;
    }
</style>