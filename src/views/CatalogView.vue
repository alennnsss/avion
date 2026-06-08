<template>
    <router-link to="`/product/${product.id}`">
        <div class="products-box" v-for="product in products" :key="product.id">
            <h1>{{ product.title }}</h1>
            <p>{{ product.price }} $</p>
        </div>
    </router-link>    
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    products = ref([])
    const loadProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            products.value = await response.json()
        } catch(error) {
            console.log('Ошибка', error.message)
        }
    }
    onMounted(() => {
        loadProducts()
    })
</script>
<style scoped>
</style>