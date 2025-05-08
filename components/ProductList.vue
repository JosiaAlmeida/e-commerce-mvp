<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="col-12">
        <h2>Produtos</h2>
      </div>
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <h4 v-if="!products.length">Sem Produtos</h4>
        <ProductCard v-for="(product, index) in products" :key="index"
          v-bind="{ name: product.nome, price: product.preco }" isProduct />
      </div>
    </div>
  </section>
</template>

<script setup>

defineProps({
  products: {
    type: Array,
    required: true
  }
})


// const products = [
//   {
//     name: 'Fancy Product',
//     image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
//     price: '$40.00 - $80.00',
//   },
//   {
//     name: 'Special Item',
//     image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
//     price: '$18.00',
//     oldPrice: '$20.00',
//     isOnSale: true,
//     stars: 5
//   },
//   {
//     name: 'Sale Item',
//     image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
//     price: '$25.00',
//     oldPrice: '$50.00',
//     isOnSale: true
//   },
//   {
//     name: 'Popular Item',
//     image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
//     price: '$40.00',
//     stars: 5
//   }
//   // Adicione mais produtos conforme necessário
// ]
</script>
