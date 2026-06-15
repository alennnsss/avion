<template>
    <div class="catalog-page">
        <div class="toolbar">
            <input 
                type="text" 
                class="search-input" 
                v-model="searchQuery"
                placeholder="Search avion products"
                >
        </div>
        <select v-model="sortType">
            <option value="default">Default</option>
            <option value="cheap">Low Price</option>
            <option value="expensive">High Price</option>
        </select>
    </div>
    <div class="product-grid">
        <ProductCard    
            v-for= "item in processedProducts"
            :id="item.id"
            :key="item.id"
            :title="item.title"
            :price="item.price"
            :image="item.image"
            :description="item.description"
        />
    </div>
    <div v-if="processedProducts.length === 0"  class="empty-state">
        <h2>No products found for "{{ searchQuery }}"</h2>
    </div>
</template>
<script setup>
    import { onMounted, ref, computed, watch } from 'vue';
    import { apiClient } from '../api';
    import ProductCard from '../components/ProductCard.vue';
    import { useRoute, useRouter } from 'vue-router'
    import { useProductsStore } from '../stores/ProductStore.js';
    const route = useRoute()
    const router = useRouter()
    const products = ref([])
    const ProductsStore = useProductsStore()
    onMounted(() => {
        ProductsStore.fetchProducts()
    })
    const searchQuery = ref(route.query.search || '')
    const sortType = ref(route.query.sort || 'default')
    const processedProducts = computed(() => {
        let result = ProductsStore.productsList.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
        if(sortType.value === 'cheap') {
            return [...result].sort((a,b) => a.price - b.price)
        }
        if(sortType.value === 'expensive') {
            return [...result].sort((a,b) => b.price - a.price )
        }
        return result
    })
    watch([searchQuery,sortType],([newSearchQuery,newSortType]) => {
        const queryParams = {

        }
        if(newSearchQuery) queryParams.search = newSearchQuery
        if(newSortType !== 'default') queryParams.sort = newSortType
        router.replace({query: queryParams})
    })
</script>
<style scoped>
button {
    border: none;
    color: white;
    background-color: #2A254B;
    width: 143px;
    height: 56px;
}        
</style>