import { api } from "../service/api";

export interface getBooksTypeRequest{
    accountId: string
    bookId: string
    token: string
}

export interface getBooksTypeResponse{
    id: string
    author: string
    title: string
    stars: {
        id: number
        created_at: string
        star: number
        book_id: string
        user_id: string
    }[]
    isbn: string
    image: string
    description: string
    dimensions: string
    availability: string
    category: string
    edition: string
    year_publi: string
    finishing: string
    page: number
    amount: number
    library_id: string
    bookFavorite: boolean
}

export async function getBook({accountId, bookId, token} : getBooksTypeRequest): Promise<getBooksTypeResponse> {

    const { data } = await api.get<getBooksTypeResponse>(`/book/${bookId}?accountId=${accountId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data
} 