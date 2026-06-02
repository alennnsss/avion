<script setup>

</script>
<template>
    <div class="container">
        <div class="text-box">
            <div class="small-idea">
                <h1>
                    It started with a small idea
                </h1>
                <p>
                    A global brand with local beginnings, our story begain in a small studio in South London in early 2014
                </p>
            </div>
            <div class="view">
                <button>
                    View Collection
                </button>
            </div>
        </div>
        <div class="image-box">
            <img src="../assets/icons/house.png" alt="House">
        </div>
    </div>    
</template>
<style scoped>

    .container {
        display: flex;
        width: 1440px;
        padding: 60px 80px;
        gap: 16px;
        height: 598px;
    }
    .text-box {
        display: flex;
        width: 634px;
        padding: 60px 80px;
        gap: 205px;
        height: 478px;
        flex-direction: column;
        background-color: #2A254B;
        color: white;
    }
    .small-idea {
        display: flex;
        flex-direction: column;
        gap: 12px;
        
    }
    .image-box {
        width: 634px;
        height: 478px;
    }
</style>