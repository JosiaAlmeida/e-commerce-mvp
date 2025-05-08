export default defineEventHandler(async event => {
    const { api } = useRuntimeConfig().public
    const slug = getRouterParam(event, 'slug')
    const id = getRouterParam(event, 'id')
    const post = getRouterParam(event, 'get')
    const method = getMethod(event)
    const userActive = await getUserSession(event) as unknown as { token: string }
    let options = {
        method: method,
        headers: {
            Authorization: `Bearer ${userActive?.token}`
        }
    } as any
    if (['POST', 'PUT'].includes(method)) {
        const body = await readBody(event)
        options.body = body
    }
    const data = await $fetch(`${api}/${slug}/${post}/${id}`, { ...options })
    return { value: data, ...data }
})
