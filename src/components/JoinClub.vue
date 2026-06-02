<script setup>

</script>
<template>
    <div class="join">
        <h1>
            Join the club and get the benefits
        </h1>
        <p>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <div class="right">
            <p class="right__item">Exclusive offers</p>
            <p class="right__item">Free events</p>
            <p class="right__item">Large discount</p>
        </div>
        <div class="text-input">
            <label for="email">
                <input name="email" placeholder="your@email.com" type="text">
            </label>
            <button>
                Sign up
            </button>
        </div>
    </div>
</template>
<style scoped>
    .join {
        display: flex;
        flex-direction: column;
        width: 1440px;
        height: 444px;
        justify-content: center;
        align-items: center;
        gap: 30px;
        background-image: url(../assets/icons/background-image.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin: 0 auto;
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
    .right {
        display: flex;
        flex-direction: row;

    }
    .right__item::before {
        content: url(../assets/icons/right.png);
    }
</style>