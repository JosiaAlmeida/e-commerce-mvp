<script setup lang="ts">

const products = ref()
const load = async () => {
  products.value = await $fetch('/api/generic/products/get') as any
}
onMounted(async () => {
  await load()
})
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <ModalProduto @fetch="() => load()" />
      <div class="col-12 mt-5 pt-5 mx-auto text-center">
        <h1>Josia Almeida</h1>
      </div>
      <div class="col-12 text-end">
        <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#produtoModal">Adicionar Produto</button>
      </div>
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item, i in products?.value">
              <th scope="row">1</th>
              <td>{{ item.nome }}</td>
              <td>{{ item.preco }}</td>
              <td> {{ item.stock }} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
