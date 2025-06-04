export const getAnimeResponse = async(resource, query) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await res.json()
    return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const res = await getAnimeResponse(resource)
    return res.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    } 
    return response
}