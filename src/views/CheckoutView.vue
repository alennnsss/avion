<template>
    <div class="checkout-page">
        <h2>
            Оформление заказа
        </h2>
        <form @submit.prevent="submitForm" action="" class="checkout-form">
            <div class="form-group">
                <label>
                    Имя
                </label> 
                <input v-model.trim="formData.name" type="text" placeholder="Введите имя...">   
            </div>
            <div class="form-group">
                <label>
                    Email
                </label> 
                <input v-model.trim="formData.email" type="email" placeholder="Введите email...">   
            </div>
            <div class="form-group">
                <label>
                    Адрес доставки
                </label> 
                <input v-model.trim="formData.address" type="text" placeholder="Введите адрес...">   
            </div>
            <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Отправка' : 'Подтвердить заказ' }}
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiClient } from '../api'
import { useCartStore } from '../stores/cartStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const cartStore = useCartStore()
const isSubmitting = ref(false)
const formData = reactive({
    name: '',
    email: '',
    address: ''
})
const submitForm = async () => {
    if(!formData.name || !formData.email) {
        alert('Пожалуйста, заполните имя и email')
        return
    }
    isSubmitting.value = true
    try{
        const response = await apiClient.post('/products', {
            orderData: formData,
            cartTotal: cartStore.totalPrice
        })
        console.log(response.data)
        alert('Заказ создан')
        router.push('/')
    } catch(err) {
        alert('Что-то пошло не так')
    }
}
</script>

<style>

</style>