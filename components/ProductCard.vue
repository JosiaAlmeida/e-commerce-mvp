<template>
  <div class="col mb-5">
    <div class="card h-100">
      <div v-if="isOnSale" class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
        Sale
      </div>
      <img v-if="image" class="card-img-top" :src="image" alt="..." />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder text-black">{{ name }}</h5>
          <div v-if="stars" class="d-flex justify-content-center small text-warning mb-2">
            <div v-for="n in stars" :key="n" class="bi-star-fill"></div>
          </div>
          <div>
            <span v-if="oldPrice" class="text-muted text-decoration-line-through">{{ oldPrice }}</span>
            {{ price }}
          </div>
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <button v-if="isProduct" type="button" @click="addCart" class="btn btn-outline-dark mt-auto">{{ buttonLabel
            }}</button>
          <a v-else class="btn btn-outline-dark mt-auto" href="#">{{ buttonLabel }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCarrinhoStore } from "~/store/carrinho"
const props = defineProps({
  name: String,
  image: String,
  price: String | Number,
  oldPrice: String,
  isOnSale: Boolean,
  stars: Number,
  isProduct: Boolean,
  buttonLabel: {
    type: String,
    default: 'Adicionar'
  }
})
const cart = useCarrinhoStore()
const addCart = () => {
  cart.setCart({ name: props.name, image: props.image, price: props.price })
}
</script>
