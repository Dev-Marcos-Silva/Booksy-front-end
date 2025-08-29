import { api } from "../service/api";

export interface deleteBookTypeRequest{
    bookId: string
    token: string
}

export async function deleteBook(data : deleteBookTypeRequest) {

    const { bookId, token} = data

    await api.delete(`/delete/book/${bookId}`,{headers: {Authorization: `Bearer ${token}`}})
} 