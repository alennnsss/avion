import { defineStore } from "pinia";
import { ref, computed } from 'vue'
export const useAuthStore = defineStore('auth',() => {
    const token = ref(localStorage.getItem('avion_token') || null)
    const isAuthenticated = computed(() => !!token.value) 
    const login = async(email, password) => {
        if(email === 'admin@avion.com' && password === '123') {
            const fakeToken = 'qwerty12345'
            token.value = fakeToken
            localStorage.setItem('avion_token', fakeToken)
            return true
        }
        throw new Error('Неверный логин или пароль')
    }
    const logout = () => {
        token.value = null
        localStorage.removeItem('avion_token')
    }
    return { token, isAuthenticated, login, logout }
})