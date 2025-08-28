import { api } from "../service/api";

export interface getBooksTypeRequest{
    bookId: string
    token: string
}

export interface getBooksTypeResponse{
    author: string
    title: string
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
}

export async function getBook({bookId, token} : getBooksTypeRequest): Promise<getBooksTypeResponse> {

    const { data } = await api.get<getBooksTypeResponse>(`/book/${bookId}`, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

    return data
} 