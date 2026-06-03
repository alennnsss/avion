<script setup>

import { ref } from 'vue'
const likes = ref(0);
const message = ref('')

const addLikes = () => {
    likes.value++
}

</script>
<template>
    
</template>
<style scoped>
    .btn {
        border: none;
        background-color: rgb(49, 128, 49);
        border-radius: 8px;
        color: white;
        font-size: 16px;
        padding: 10px;
    }
</style>