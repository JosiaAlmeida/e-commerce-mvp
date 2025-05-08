export default defineEventHandler(async event => {
    const { api } = useRuntimeConfig().public
    const slug = getRouterParam(event, 'slug')
    const id = getRouterParam(event, 'id')
    try {
        const userActive = await getUserSession(event) as unknown as { token: string }
        if (userActive) {
            const data = await $fetch(`${api}/${slug}/${id}`, {
                headers: {
                    Authorization: `Bearer ${userActive.token}`
                }
            })

            return { value: data, ...data }
        }
        const data = await $fetch(`${api}/${slug}/${id}`)
        return { value: data, ...data }
    } catch (error) {
        setResponseStatus(event, 401)
        return error
    }
})
