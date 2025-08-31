import { api } from "../service/api";

export interface getRecentsBookTypeRequest{
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
}

export async function getRecentsBook({ token } : getRecentsBookTypeRequest): Promise<getRecentsBookTypeResponse[]> {

    const { data } = await api.get<{bookWithStar: getRecentsBookTypeResponse[]}>('/recents/book', {headers: {Authorization: `Bearer ${token}`}})

    return data.bookWithStar
} 