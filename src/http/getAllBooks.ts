import { api } from "../service/api";

export interface getAllBooksTypeRequest{
    libraryId: string
    token: string
}

export interface getAllBooksTypeResponse{
    id: string
    author: string
    title: string
    image: string
    description: string
    isbn: string
    dimensions: string
    availability: string
    category: string
    edition: string
    year_publi: string
    finishing: string
    page: number
    amount: number
    library_id: string
    updated_at: string
    created_at: string
}

export async function getAllBooks({libraryId, token} : getAllBooksTypeRequest): Promise<getAllBooksTypeResponse[]> {

    const { data } = await api.get<{book: getAllBooksTypeResponse[]}>(`/library/book/${libraryId}`, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

    return data.book
} 