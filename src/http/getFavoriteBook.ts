import { api } from "../service/api";

export interface getFavoriteBookTypeRequest{
    userId: string
    token: string
}

export interface getFavoriteBookTypeResponse{
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

export async function getFavoriteBook({userId, token} : getFavoriteBookTypeRequest): Promise<getFavoriteBookTypeResponse[]> {

    const { data } = await api.get<{favoriteBook: getFavoriteBookTypeResponse[]}>(`/favorite/get/${userId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.favoriteBook
} 