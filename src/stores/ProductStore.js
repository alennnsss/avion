import { defineStore } from 'pinia'
import { ref } from 'vue' 
import { apiClient } from '../api'
export const useProductsStore = defineStore('products', () => {
    const productsList = ref([])
    const isLoading = ref(false)
    const fetchProducts = async() => {
        if(productsList.value.length > 0) return
        isLoading.value = true
        try{
            const response = await apiClient.get('/products')
            productsList.value = response.data
        } catch(error) {
            console.log('Ошибка',error.message)
        } finally {
            isLoading = false
        }

    }
    return {
        productsList,
        isLoading,
        fetchProducts
    }
})