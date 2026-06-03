<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import BrandDifferences from './components/BrandDifferences.vue';
import CeramicsListing from './components/CeramicsListing.vue';
import TheFooter from './components/TheFooter.vue';
import JoinClub from './components/JoinClub.vue';
import TheInfo from './components/TheInfo.vue';
import ProductCart from './components/ProductCart.vue';
import JoinUs from './components/JoinUs.vue';
// const mockProduct = {
//   id: 122,
//   title: 'Умные часы Apple Watch Series 9',
//   price: 499,
//   image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=300&q=80',
//   stock: 15
// };
// const cartCount = ref(0)
// const addToCard = (productId) => {
//     cartCount.value++;
//     console.log(`Родитель поймал событие: ${productId}`)
// }
const isSubscribed = ref(false)
const changeSubscribe = (email) => {
  isSubscribed.value = true
}
</script>

<template>
  <div>
     <the-header :cart-count="cartCount"/>
     <hero-banner/>
     <brand-differences/>
     <ceramics-listing/>
     <the-footer/>
     <join-club/>
     <!-- <the-info/>  -->
     <join-us
      :is-subscribed = "isSubscribed"
     />
  </div>  
</template>


<style >
  
</style>