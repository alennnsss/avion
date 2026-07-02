<script setup>
import { ref } from 'vue'

const menuLinks = ref([
  { name: 'New arrivals', url: 'new' },
  { name: 'Best sellers', url: 'best' },
  { name: 'Recently viewed', url: 'recently' },
  { name: 'Popular this week', url: 'popular' },
  { name: 'All products', url: 'all' }
])
const categoriesLinks = ref([
  { name: 'Crockery', url: 'Crockery' },
  { name: 'Furniture', url: 'Furniture' },
  { name: 'Homeware', url: 'Homeware' },
  { name: 'Plant pots', url: 'Plant pots' },
  { name: 'Chairs', url: 'Chairs' },
  { name: 'Crockery', url: 'Crockery' }
])
const companyLinks = ref([
  { name: 'About us', url: 'About us' },
  { name: 'Vacancies', url: 'Vacancies' },
  { name: 'Contact us', url: 'mailto:sainalenkz@gmail.com' },
  { name: 'Privacy', url: 'Privacy' },
  { name: 'Returns policy', url: 'Returns policy' }
])
const props = defineProps({
    isSubscribed:{
        type: Boolean,
        required: true,
    }
})
const email = ref('')
const emit = defineEmits(['subscribe'])
const handleBuy = () => {
    emit('subscribe',email.value)
    email.value = ''
}
</script>
<template>
    <footer>
        <div class="footer-box">
            
            <div class="menu">
                <h3>
                    Menu
                </h3>
                <a v-for="(link, index) in menuLinks" :key="index" :href="link.url">
                    {{ link.name }}
                </a>
            </div>
            <div class="menu">
                <h3>Categories</h3>
                <a v-for="(link, index) in categoriesLinks" :key="index" :href="link.url">
                    {{ link.name }}
                </a>
            </div>
            <div class="menu">
                <h3>
                    Our company
                </h3>
                <a v-for="(link, index) in companyLinks" :key="index" :href="link.url">
                    {{ link.name }}
                </a>
            </div>

            <div class="text-input" v-if="isSubscribed === 'false'">
                <label for="email">
                    <input name="email" placeholder="your@email.com" type="text">
                </label>
                <button>
                    Sign up
                </button>
            </div>
            <div v-else>
                <p>
                    Thank you for Subscribing!
                </p>
            </div>
            
        </div>    
        <div class="border">

        </div>
        <div class="ending">
            <p>Copyright 2026 Avion LTD</p>
            <div class="icons">
                <img src="../assets/icons/facebook-svgrepo-com.svg" alt="j" class="icon">
                <img src="../assets/icons/instagram-svgrepo-com.svg" alt="t" class="icon">
                <img src="../assets/icons/skype-svgrepo-com.svg" alt="t" class="icon">
                <img src="../assets/icons/twitter-svgrepo-com.svg" alt="t" class="icon">
                <img src="../assets/icons/pinterest-180-svgrepo-com.svg" alt="pint" class="icon">
            </div>    
        </div>
    </footer>
</template>
<style scoped>
    .icon {
        width: 0.9rem;
        height: 0.9rem;
    }
    .menu {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 260px;
        height: 175px;
    }
    .border {
        border: 1px solid #4E4D93;
        width: 1350px;
        margin-left: 40px;
    }
    input {
        width: 354px;
        height: 56px;
    }
    button {
        width: 118px;
        height: 56px;
        background-color: #2A254B;
        color: white;
    }
    a {
        text-decoration: none;
        color: white;
    }
    .footer-box {
        display: flex;
        padding: 40px;
        gap: 40px;
        height: 400px;
    }
    footer {
        
        width: 100%;
        height: 580px;
        padding: 40px;
        background-color: #2A254B;
        color: white;
    }
    .ending {
        display: flex;
        justify-content: space-between;
        gap: 60px;
        height: 100px;
        padding: 40px;
    }
    .icons {
        display: flex;
        gap: 24px;
        
    }
</style>