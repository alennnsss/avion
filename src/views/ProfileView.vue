<template>
  <div class="profile-container">
    <aside class="sidebar">
        <h3>
            My account
        </h3>
        <nav class="profile-nav">
            <router-link :to="{name: 'profile-orders'}">
                My orders
            </router-link>
            <router-link :to="{name: 'profile-settings'}">
                My settings
            </router-link>
            <button class="logout-btn" @click="handleLogout">
                Logout
            </button>
        </nav>
    </aside>
    <main class="content">
        <RouterView/>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
const router = useRouter()
const authStore = useAuthStore()
const handleLogout = () => {
    authStore.logout()
    router.push('/login')
}

</script>

<style scoped>
.sidebar {
    max-width: 330px;
    display: flex;
    flex-direction: column;
    gap: 16px;

}
.profile-container {
    display: flex;
    gap: 40px;
    
    padding: 50px;
}
.profile-nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.logout-btn {
    border: none;
    background-color: transparent;
    max-width: fit-content;
    border-bottom: 1px solid black;

}
</style>