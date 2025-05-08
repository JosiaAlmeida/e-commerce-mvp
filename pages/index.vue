<script setup lang="ts">

const products = ref()

onMounted(async () => {
  products.value = await $fetch('/api/generic/products/get') as any
})
</script>

<template>
  <div>
    <HeaderBanner />
    <Services />
    <ProductList :products="products?.value ?? []" />
  </div>
</template>

<style scoped></style>
