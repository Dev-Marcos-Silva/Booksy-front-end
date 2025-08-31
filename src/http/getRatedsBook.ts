import { api } from "../service/api";

export interface getRatedsBookTypeRequest{
    token: string
}

export interface getRatedsBookTypeResponse{
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

export async function getRatedsBook({ token } : getRatedsBookTypeRequest): Promise<getRatedsBookTypeResponse[]> {

    const { data } = await api.get<{bookWithStar: getRatedsBookTypeResponse[]}>('/rateds/book', {headers: {Authorization: `Bearer ${token}`}})

    return data.bookWithStar
} 