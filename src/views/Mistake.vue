<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="page-not-found">
        <h1>
            Oops! Page not found
        </h1>
        <router-link to="/avion">
            Back To Home Page
        </router-link>
    </div>
</template>
<style scoped>
    .page-not-found {
       
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-content: center;
        padding: 40px;

    }
</style>