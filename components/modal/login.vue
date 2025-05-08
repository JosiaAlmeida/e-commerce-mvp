<script setup lang="ts"></script>

<template>
  <div class="modal fade" id="loginModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-black fs-5" id="loginModalLabel">Iniciar Sessão</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <FormInputCustom label="Email" type="email" class="my-3" />
            <FormInputCustom label="Senha" type="password" />
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
