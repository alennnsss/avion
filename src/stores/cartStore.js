import { defineStore } from 'pinia'
import { ref, computed,watch } from 'vue'

export const useCartStore = defineStore('cart',() => {
    //1 State
    const items = ref(JSON.parse(localStorage.getItem('cart-items')) || [])
    //2 Getters
    const totalItemsCount = computed(() => {
        return items.value.reduce((total,item) => total + item.quantity,0)
    })
    //3 общая сумма корзины
    const totalPrice = computed(() => {
        return items.value.reduce((total,item) => total + (item.price * item.quantity),0)
    })
    // Actions 
    const addToCart = (product,quantityToAdd = 1) => {
        const exisitingItem = items.value.find(item => item.id === product.id)
        if(exisitingItem) {
            exisitingItem.quantity += quantityToAdd
        } else {
            items.value.push({...product, quantity: quantityToAdd})
        }
    }
    const removeFromCart = (productId) => {
        items.value = items.value.filter(item => item.id !== productId)
    }
    watch(items,(newItems) => {
        localStorage.setItem('cart-items',JSON.stringify(newItems))
        
    },{deep: true})
    return {
        items, 
        totalItemsCount,
        totalPrice, 
        addToCart, 
        removeFromCart
    }

})