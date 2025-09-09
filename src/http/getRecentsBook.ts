import { api } from "../service/api";

export interface getRecentsBookTypeRequest{
    userId: string
    token: string
}

export interface getRecentsBookTypeResponse{
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

export async function getRecentsBook({ userId, token } : getRecentsBookTypeRequest): Promise<getRecentsBookTypeResponse[]> {

    const { data } = await api.get<{bookWithStar: getRecentsBookTypeResponse[]}>(`/recents/book/${userId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.bookWithStar
} 