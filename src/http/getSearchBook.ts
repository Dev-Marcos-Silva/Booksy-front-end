import { api } from "../service/api";

export interface getSearchBooksTypeRequest{
    query: string
    token: string
}

export interface getSearchBooksTypeResponse{
    id: string
    title: string
    author: string
    image: string | null
    stars: {
        id: number
        created_at: string
        star: number
        book_id: string
        user_id: string
    }[]
}

export async function getSearchBook({query, token} : getSearchBooksTypeRequest): Promise<getSearchBooksTypeResponse[] > {

    const { data } = await api.get<{bookWithStar: getSearchBooksTypeResponse[]}>(`/search/book?query=${query}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.bookWithStar
}