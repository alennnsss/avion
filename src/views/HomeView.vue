<template>  
    <hero-banner/>
    <brand-differences/>
    <ceramics-listing/>
    <the-footer/>
    <join-club/>
    <div>
        
    </div>
</template>
<script setup>

import { ref } from 'vue'

import HeroBanner from '../components/HeroBanner.vue'
import BrandDifferences from '../components/BrandDifferences.vue';
import CeramicsListing from '../components/CeramicsListing.vue';
import TheFooter from '../components/TheFooter.vue';
import JoinClub from '../components/JoinClub.vue';
const isSubscribed = ref(false)
const changeSubscribe = (email) => {
  isSubscribed.value = true
}

const cartCount = ref(0)
const addToCard = (productId) => {
    cartCount.value++;
    console.log(`Родитель поймал событие: ${productId}`)
}
</script>
<style scoped>

</style>