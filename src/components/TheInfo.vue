<script setup>
const products = [
  {
    title: "The Dandy Chair",
    id: 1,
    price: 250,
    currency: "GBP",
    description: "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery."
  }
]
</script>
<template>
    <div class="product-box" v-for="product in products" :key="product.id">
        <div class="image-box">
            <img src="../assets/icons/dandy.png" :alt="product.title">
        </div>
        <div class="text-box">
            <h1>
                {{ product.title }}
            </h1>
            <p>
                £{{ product.price }}
            </p>
            <div class="desc">
                <h2>
                    Product Description
                </h2>
                <p>
                    {{ product.description }}
                </p>
            </div>
            <div>
                <h2>Dimensions</h2>
            </div>
            <div class="characteris">
                <div class="height gen">
                    <h3>
                        Height
                    </h3>
                    <p>
                        110cm
                    </p>
                </div>
                <div class="width gen">
                    <h3>
                        Width
                    </h3>
                    <p>
                        75cm
                    </p>
                </div>
                <div class="depth gen">
                    <h3>
                        Depth
                    </h3>
                    <p>
                        50cm
                    </p>
                </div>
            </div>
            <div class="quantity">
                <h2>Quantity</h2>
                <input type="number">
            </div>
            <button>
                Add to cart
            </button>
        </div>
    </div>
</template>
<style scoped>
    .product-box {
        display: flex;
        gap: 67px;
        padding: 80px;
    }
    .image-box {
        width: 607px;
        height: 600px;
    }
    .text-box {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 31px;
    }
    .desc {
        gap: 14px;
    }
    .characteris {
        display: flex;
        flex-direction: row;
        gap: 99.5px;
    }
    .gen {
        display: flex;
        flex-direction: column;
        gap: 15px;
    } 
    input {
        width: 122px;
        height: 46px;
        border: none;
    
    } 
    button {
        border: none;
        color: white;
        background-color: #2A254B;
        width: 143px;
        height: 56px;
    }
</style>