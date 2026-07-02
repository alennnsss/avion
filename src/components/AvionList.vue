<template>
  <div class="products-container">
    <slot name="products-header">
        
    </slot>
    <div class="products-box" v-for="product in products" :key="product.id">
        <slot name="products-container" :rowData="product">    
            
        </slot>
    </div>    
  </div>
</template>

<script setup>
const products = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        price: 22.3
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99
    },
    
]
</script>

<style scoped>
    .products-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .products-box {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>