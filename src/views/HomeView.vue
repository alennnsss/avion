<template>  
    <hero-banner/>
    <brand-differences/>
    <AvionCarousel>
      
      <template #slider="{item}">
        <div class="products-info">
          <h1>
          
            New Products
          </h1>
          <h2>
            {{ item.title }}
          </h2>
          <img :src="item.image" :alt="item.title" width="350px" height="200px">
          
        </div>  
      </template>
    </AvionCarousel>
    <ceramics-listing/>
    <the-footer/>
    <join-club/>
    <reviews>
      <template #reviews="{item}">
        <div class="reviews-info">
          <h1>
            Reviews
          </h1>
          <h2>
            {{ item.name }}
          </h2>
          <p>
            {{ item.text }}
          </p>
        </div>  
      </template>
    </reviews>
    <div>
        
    </div>
</template>
<script setup>

import { ref } from 'vue'
import AvionCarousel from '../components/AvionCarousel.vue';
import HeroBanner from '../components/HeroBanner.vue'
import BrandDifferences from '../components/BrandDifferences.vue';
import CeramicsListing from '../components/CeramicsListing.vue';
import TheFooter from '../components/TheFooter.vue';
import JoinClub from '../components/JoinClub.vue';
import Reviews from '../components/Reviews.vue';

</script>
<style scoped>
.products-info {
  padding: 50px;
}
.reviews-info {
  display: flex;
  flex-direction: column;
  padding: 50px;
}
</style>