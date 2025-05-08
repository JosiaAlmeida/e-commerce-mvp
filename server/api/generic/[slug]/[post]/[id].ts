export default defineEventHandler(async event => {
    const { api } = useRuntimeConfig().public
    const slug = getRouterParam(event, 'slug')
    const id = getRouterParam(event, 'id')
    const post = getRouterParam(event, 'post')
    const body = await readBody(event)
    const userActive = await getUserSession(event) as unknown as { token: string }
    let options = {
        headers: {
            Authorization: `Bearer ${userActive?.token}`
        },
        method: 'POST',
        body: body
    } as any
    const data = await $fetch(`${api}/${slug}/${post}/${id}`, { ...options })
    return data
})
