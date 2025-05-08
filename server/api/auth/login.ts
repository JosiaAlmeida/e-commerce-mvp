export default defineEventHandler(async (event) => {
  const { api } = useRuntimeConfig().public
  try {
    const data = await $fetch<{ access_token: string }>(`${api}/auth/login`, {
      method: 'POST',
      body: await readBody(event)
    })

    if (!data) {
      setResponseStatus(event, 401)
      return { error: "Credenciais inválidas" }
    }

    await setUserSession(event, {
      token: data.access_token
    })

    setResponseStatus(event, 200)
    return data
  } catch (error) {
    setResponseStatus(event, 401)
    return error
  }
})
