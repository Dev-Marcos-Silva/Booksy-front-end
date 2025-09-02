import { api } from "../service/api"

export interface PostRentedBookTypeRequest{
    days: number
    bookId: string
    userId: string
    libraryId: string
    token: string
}

export async function postRentedBook({days, bookId, userId, libraryId, token}: PostRentedBookTypeRequest) {

    await api.post('/rented/book', {days, bookId, userId, libraryId}, {headers: {Authorization: `Bearer ${token}`}})

}