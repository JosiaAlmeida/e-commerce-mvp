export default defineEventHandler(async event => {
  const { api } = useRuntimeConfig().public
  const userActive = await getUserSession(event) as unknown as { token: string }
  if (userActive) {
    const data = await $fetch(`${api}/auth/me`, {
      headers: {
        Authorization: `Bearer ${userActive.token}`
      }
    })
    return { value: data }
  }
  return { value: null }
})
