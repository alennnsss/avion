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
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cartStore';
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
</script>

<style>

</style>