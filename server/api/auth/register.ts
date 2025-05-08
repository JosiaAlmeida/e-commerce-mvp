export default defineEventHandler(async (event) => {
  const { api } = useRuntimeConfig().public
  const data = await $fetch(`${api}/users/register`, {
    method: 'POST',
    body: await readBody(event)
  })
  return { value: data }
})
