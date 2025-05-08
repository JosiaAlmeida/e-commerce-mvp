<script setup lang="ts">
const isNew = ref(false)

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const handle = async () => {
  const data = await useFetch(`/api/auth/${isNew.value ? 'register' : 'login'}`, {
    method: 'POST',
    body: {
      name: form.name,
      email: form.email,
      password: form.password
    }
  })
  if (data.data.value) {
    window.location.reload()
  }
}

</script>

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
            <FormInputCustom @update:model-value="form.name = $event" v-if="isNew" label="Nome" type="text"
              class="my-3" />
            <FormInputCustom @update:model-value="form.email = $event" label="Email" type="email" class="my-3" />
            <FormInputCustom @update:model-value="form.password = $event" label="Senha" type="password" />
          </form>
          <button @click="isNew = !isNew" class="btn btn-link">{{ isNew ? 'Entrar' : 'Criar Conta' }}</button>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark px-5" data-bs-dismiss="modal">Fechar</button>
          <button type="button" @click="handle" class="btn btn-dark px-5">{{ !isNew ? 'Entrar' :
            'Criar Conta'
          }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
