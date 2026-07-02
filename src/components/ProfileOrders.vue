<template>
  <AvionList>
    <template #products-header>
        <h2>
            Your Products
        </h2>
    </template>
    <template #products-container="{rowData}">
        <h2>
            {{ rowData.title }}
        </h2>
        <p>
            Price: £{{ rowData.price }}
        </p>
    </template>
  </AvionList>
</template>

<script setup>
import AvionList from './AvionList.vue';
</script>

<style scoped>

</style>