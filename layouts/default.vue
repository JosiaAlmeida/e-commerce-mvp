<script setup lang="ts">
import { useUserStore } from '~/store/user';

const user = useUserStore()
onMounted(async () => {
  const { session } = useUserSession()
  console.log("user", session);

  if (!session.value?.token) {
    const loginModal = document.getElementById('loginModal')
    loginModal?.click()
  }
  else {
    const data = await $fetch('/api/auth/me')
    user.setUser(data?.value)

  }
})
</script>

<template>
  <div>
    <Navbar />
    <ModalLogin />
    <Cart />
    <slot />
  </div>
</template>

<style scoped></style>
