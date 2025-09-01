import { api } from "../service/api";

export interface getCategoryBooksTypeRequest{
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
}

export async function getCategoryBook({category, token} : getCategoryBooksTypeRequest): Promise<getCategoryBooksTypeResponse[] > {

    const { data } = await api.get<{bookWithStar: getCategoryBooksTypeResponse[]}>(`/category/book?category=${category}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.bookWithStar
}