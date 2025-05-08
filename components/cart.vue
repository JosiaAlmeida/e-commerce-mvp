<script setup lang="ts">
import { useCarrinhoStore } from "~/store/carrinho"

const cart = useCarrinhoStore()

</script>

<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="carrinhoCanvas" aria-labelledby="carrinhoCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-black" id="carrinhoCanvasLabel">Carrinho</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <CarrinhoItem v-for="(product, index) in cart.getCart" :key="index" :name="product.name" class="mb-3" />
    </div>
  </div>
</template>

<style scoped></style>
