<template>
    <div class="settings-page">
        <h2>
            Account Settings
        </h2>
        <button @click="isModal = true">
            Delete account
        </button>
            
        <BaseModal :isOpen="isModal" @close="closeModal">
        <template #header>
            <h2>
                Delete Account
            </h2>
        </template>
        <template #default>
            <p>Are you sure?</p>

        </template>

        <template #footer>
            <button @click="isModal = false">
                Cancel
            </button>
            <button @click="confirmDelete">
                Confirm
            </button>
        </template>
        </BaseModal>
    </div>    
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '../stores/authStore.js';
    import BaseModal from './BaseModal.vue';
    import { ref } from 'vue'
    const authStore = useAuthStore()
    const router = useRouter()
    const isModal = ref(false)
    const confirmDelete = () => {
        authStore.logout()
        localStorage.removeItem('avion_token')
        router.push('/')
        isModal.value = false
    }
    const closeModal= () => {
        isModal.value= false
    }
</script>

<style>

</style>