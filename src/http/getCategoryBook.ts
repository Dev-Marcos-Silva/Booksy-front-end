import { api } from "../service/api";

export interface getCategoryBooksTypeRequest{
    userId: string
    category: string
    token: string
}

export interface getCategoryBooksTypeResponse{
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

export async function getCategoryBook({userId, category, token} : getCategoryBooksTypeRequest): Promise<getCategoryBooksTypeResponse[] > {

    const { data } = await api.get<{bookWithStar: getCategoryBooksTypeResponse[]}>(`/category/book?category=${category}&userId=${userId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.bookWithStar
}