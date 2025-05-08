<script setup lang="ts">
const handleUpload = (file: any) => {
  console.log(file)
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
            <FormInputCustom label="Nome" type="text" class="my-3" />
            <FormInputCustom label="Preço" type="number" />
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark px-5" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-dark px-5">Entrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
