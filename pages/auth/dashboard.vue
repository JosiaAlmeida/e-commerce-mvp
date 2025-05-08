<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="row mt-5">
      <ModalProduto />
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
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John</td>
              <td>Doe</td>
              <td>@social</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
