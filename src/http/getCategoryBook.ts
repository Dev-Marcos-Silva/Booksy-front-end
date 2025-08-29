import { api } from "../service/api";

export interface getCategoryBooksTypeRequest{
    category: string
    token: string
}

export interface getCategoryBooksTypeResponse{
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

export async function getCategoryBook({category, token} : getCategoryBooksTypeRequest): Promise<getCategoryBooksTypeResponse[] > {
    const { data }  = await api.get<{books: getCategoryBooksTypeResponse[]}>(`/category/book?category=${category}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.books
}