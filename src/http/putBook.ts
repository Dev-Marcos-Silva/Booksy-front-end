import { api } from "../service/api";

export interface putBookTypeRequest{
    bookId: string
    libraryId: string
    author: string
    title: string
    description: string
    category: string
    edition: string
    finishing: string
    year_publi: string
    isbn: string
    dimensions: string
    page: string           
    amount: string 
    token: string
}

export async function putBook(data : putBookTypeRequest) {

    const { bookId, token, amount, page, ...baseData } = data

    const newData ={
        ...baseData,
        page: Number(page),
        amount: Number(amount)
    }

    await api.patch(`/update/book/${bookId}`, newData, {headers: {Authorization: `Bearer ${token}`}})
} 