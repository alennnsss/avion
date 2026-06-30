<template>
    <form @submit.prevent="loginForm">
        <div class="login-page">
            <h2>
                Login
            </h2>
            <div class="login-page__box">
                <label for="email"> Email</label>
                <input name="email" type="email" v-model="email" required>
            </div>
            <div class="login-page__box">   
                <label for="password">Password</label>
                <input type="password" for="password" v-model="password" required>
            </div>
            <button type="submit">
                Login
            </button>     
        </div>
    </form>
</template>

<script setup>
import router from '../router';
import { useAuthStore } from '../stores/authStore';
import { ref } from 'vue';
const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const loginForm = async() => {
    try {
        const success = await authStore.login(email.value, password.value)
        if(success) {
            console.log('Login success')
            router.push('/checkout')
        }
    } catch(err){
        console.log('Error', err.message)
    }
}
</script>

<style scoped>
    .login-page {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 30px;
    }
    .login-page__box {
        display: flex;
        flex-direction: column
    }
    input {
        width: 300px;
    }
</style>