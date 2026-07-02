<template>
    <div class="product-card">
        <img width="607px" height="661px" :src="props.image" :alt="product-image" class="product-image">
        <div class="product-card-info">
            <div class="product-cart-header">
                <h1 class="product-title">
                    {{ props.title }}
                </h1>
                <h4 class="product-price">
                    {{ props.price }}
                </h4>
                <p class="product-description">
                    {{ props.description }}
                </p>
                <label for="product-quan">Quantity</label>
                <input id="product-quan" type="number" v-model="productQuantity">
                <button class="product-card-btn" @click="handleBuyClick">
                    Add to cart
                </button>
                <Quick :isOpen ="isQuickViewOpen" >
                    <template #button>
                        <button @click="openModal">
                            Quick View
                        </button>
                    </template>
                    <template #default>
                        <div class="product-info">
                            <img :src="props.image" :alt="props.title" width="200px;">
                            <p>{{ props.description }}</p>
                            <button class="product-card-btn" @click="handleBuyClick">
                                Add to cart
                            </button>
                            <label for="product-quan">Quantity</label>
                            <input id="product-quan" type="number" v-model="productQuantity">
                            <button @click="closeModal">
                                Close
                            </button>
                        </div>
                    </template>
                </Quick>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cartStore';
import Quick from './Quick.vue';
const cartStore = useCartStore()
const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: 'Product title'
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    id: {
        type: Number,
        default: 0
    }
})
const productQuantity = ref(0)
const handleBuyClick = () => {
    cartStore.addToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        description: props.description,
    },productQuantity.value)
}
const isQuickViewOpen = ref(false)
const openModal = () => {
    isQuickViewOpen.value = true
}
const closeModal = () => {
    isQuickViewOpen.value = false
}
</script>

<style scoped>
    .product-info {
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: white;
        width: 300px;
    }

</style>