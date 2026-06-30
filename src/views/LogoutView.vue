<template>
  <form @submit.prevent="logoutForm">
    <div class="logout-page">
        <h2>Logout</h2>
        <button>Yes</button>
        <button>No</button>
    </div>
  </form>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()
const logoutForm = async() => {
    try {
        authStore.logout()
        
        console.log(
            'Logout success'
        )
        router.push('/catalog')
        
    } catch(error) {
        console.log('Error', error.message)
    }
}
</script>

<style scoped>
    .logout-page {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    button {
        width: 118px;
        height: 56px;
        background-color: #2A254B;
        color: white;
    }
</style>