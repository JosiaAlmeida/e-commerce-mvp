export default defineEventHandler(async event => {
  const { api } = useRuntimeConfig().public
  const slug = getRouterParam(event, 'slug')
  const userActive = await getUserSession(event) as unknown as { token: string }
  if (userActive) {
    const data = await $fetch(`${api}/${slug}`, {
      headers: {
        Authorization: `Bearer ${userActive.token}`
      }
    })
    return { value: data, ...data }
  }
  const data = await $fetch(`${api}/${slug}`)
  return { value: data, ...data }
})
