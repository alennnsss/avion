<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number, 
        default: 0
    }, 
    image: {
        type: String,
        default: 'https//via.placeholder.com/300'
    }, 
    description: {
        type: String,
        default: ''
    },
    techDescription: {
        type: String,
        default: ''
    }
})
const emit = defineEmits('add-item')
const handleBuy = () => {
    emit('add-item',props.id)
}
</script>
<template>
    <div class="product-card container">
        <img v-if="props.img" :src="props.image" alt="img" width="608" height="" class="product-image">
        <div class="product-info">
            <h3 class="title-price">
                {{ props.title }}
            </h3>
            <p class="price">
                {{ props.price }}
            </p>
            <div class="product-desc">
                <h1 class="product-description-title">
                    Product description
                </h1>
                <p>{{ props.description }}</p>
            </div>
            <div class="product-techDescription">
                <h4 class="dimension">Dimension</h4>
                <p>{{ props.techDescription }}</p>
            </div>
            <div class="quantity">
                <h4>Quantity</h4>
                <input type="number">
            </div>
            <button class="add-to-cart" @click="handleBuy">
                Add to cart
            </button>
        </div>
    </div>
</template>
<style scoped>
.product-card {
    display: flex;
    background-color: #f9f9f9;
    gap: 67px;
}
.title-price {
    font-size: 36px;
    font-family: 'Clash Display',sans-serif;
    color: #2A254B;

}
</style>