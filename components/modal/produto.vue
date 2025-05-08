<script setup lang="ts">
import { useUserStore } from '~/store/user'
const emits = defineEmits(["fetch"])

const user = useUserStore()

const form = reactive({
  name: '',
  price: 0,
  image: '',
  stock: 0
})

const handleUpload = (file: any) => {
  console.log(file)
}

const save = async () => {
  await $fetch('/api/generic/products/post', {
    method: 'POST',
    body: {
      nome: form.name,
      preco: Number(form.price),
      // image: form.image,
      stock: Number(form.stock),
      vendedorId: user.getUser.userId
    }
  })
  emits("fetch")
}
</script>

<template>
  <div class="modal fade" id="produtoModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="produtoModalLabel"
    aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-black fs-5" id="produtoModalLabel">Novo Produto</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="col-md-12">
              <label for="fileInput">Imagem</label>
              <div class="custom-file d-flex justify-content-center align-items-center">
                <label for="fileInput"
                  class="custom-file-label d-flex justify-content-center align-items-center h-100 w-100">Clique aqui
                  para selecionar o arquivo
                  <br>
                  Carregue apenas .png, .jpeg, .jpg
                </label>
                <input @change="({ target }) => handleUpload(target?.files)" accept=".png, .jpeg, .jpg" type="file"
                  id="fileInput" class="custom-file-input" />
              </div>
            </div>
            <FormInputCustom @update:model-value="form.name = $event" label="Nome" type="text" class="my-3" />
            <FormInputCustom @update:model-value="form.price = $event" label="Preço" type="number" />
            <FormInputCustom @update:model-value="form.stock = $event" label="Stock" type="number" />
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark px-5" data-bs-dismiss="modal">Fechar</button>
          <button type="button" data-bs-dismiss="modal" @click="save" class="btn btn-dark px-5">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
