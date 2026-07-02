<template>
    <div class="slider">
        <div :key="currentIndex">
            <slot :item="slides[currentIndex]" name="slider">
                
            </slot>
        </div> 
        <div class="buttons">
            <button @click="prevSlide">
                &lt;
            </button>  
            <button @click="nextSlide">
                &gt;
            </button>
            
            
        </div>     
    </div>    
</template>

<script setup>
    import Vase from "../assets/icons/basic.png"
    import Dandy from "../assets/icons/dandy.png"
    import Lamp from "../assets/icons/lamp.png"
    import { ref } from 'vue'
    const slides = [
        {
            id: 1,
            title: "Vase",
            image: Vase,
        },
        {
            id: 2,
            title: "Dandy Chair",
            image: Dandy

        },
        {
            id: 3,
            title: "Lamp",
            image: Lamp
        }
    ]
    const currentIndex = ref(0)
    const nextSlide = () => {
        if(currentIndex.value === slides.length -1) {
            currentIndex.value = 0
        } else {
            currentIndex.value ++;
        }
    }
    const prevSlide = () => {
        if(currentIndex.value === 0) {
            currentIndex.value = slides.length -1
        } else {
            currentIndex.value--
        }
    }
</script>

<style scoped>
    .buttons {
        padding: 50px;
    }
    .slider {
        margin-left: 40px;
        display: flex;
        flex-direction: column;
    }
</style>