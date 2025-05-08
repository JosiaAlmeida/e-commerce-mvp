<script setup lang="ts">
import { useCarrinhoStore } from "~/store/carrinho"

const cart = useCarrinhoStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <nuxt-link class="navbar-brand" to="/">4STRON4UTAS</nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><nav-link class="nav-link active" to="/">Inicio</nav-link></li>
          <!-- <li class="nav-item"><a class="nav-link" href="#">Produtos</a></li> -->
        </ul>
        <form class="d-flex gap-4">
          <button class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#carrinhoCanvas"
            aria-controls="carrinhoCanvas">
            <i class="bi-cart-fill me-1"></i>
            Carrinho
            <span class="badge bg-dark text-white ms-1 rounded-pill">{{ cart.getCart?.length || 0 }}</span>
          </button>
          <button class="btn btn-dark px-5" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
            <i class="bi bi-person"></i>
            Entrar
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
