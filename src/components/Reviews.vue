<template>
    <div>
        <div :key="currentIndex">
            <slot :item="reviews[currentIndex]" name="reviews">
                
            </slot>
        </div> 
        <div class="buttons">
            <button @click="prevReview">
                &lt;
            </button>  
            <button @click="nextReview">
                &gt;
            </button>
        </div>     
    </div>
</template>

<script setup>
import { ref } from "vue"
const reviews = [
    {
        id: 1,
        name: "Aliya",
        text: "I absolutely love the quality of the furniture! Everything arrived on time, was easy to assemble, and looks even better in person. The minimalist design fits perfectly in my living room. I'll definitely be ordering again."
    },
    {
        id: 2,
        name: "Sara",
        text: "Excellent customer service from start to finish. The website was easy to navigate, and my order arrived in perfect condition. The dining table is sturdy, stylish, and exactly what I was looking for."
    },
    {
        id: 3,
        name: "John",
        text: "Beautiful products at a reasonable price. I purchased a sofa and a coffee table, and both exceeded my expectations. The craftsmanship is impressive, and my home feels so much more inviting now."
    }
]
const currentIndex = ref(0)
const nextReview = ()=> {
    if(currentIndex.value === reviews.length -1 ) {
        currentIndex.value = 0
    } else {
        currentIndex.value ++;
    }
}
const prevReview = () =>{
    if(currentIndex.value = 0) {
        currentIndex.value = reviews.length-1
    } else {
        currentIndex.value --;
    }
}
</script>

<style scoped>
.buttons {
    padding: 50px;
}
</style>