import { api } from "../service/api";

export interface getSearchBooksTypeRequest{
    userId: string
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
    bookFavorite: boolean
}

export async function getSearchBook({userId, query, token} : getSearchBooksTypeRequest): Promise<getSearchBooksTypeResponse[] > {

    const { data } = await api.get<{bookWithStar: getSearchBooksTypeResponse[]}>(`/search/book?query=${query}&userId=${userId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.bookWithStar
}