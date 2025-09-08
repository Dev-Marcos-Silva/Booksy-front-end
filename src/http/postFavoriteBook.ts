import { api } from "../service/api";

export interface postFavoriteBookTypeRequest{
    userId: string
    bookId: string
    token: string
}

export async function postFavoriteBook({userId, bookId, token}: postFavoriteBookTypeRequest) {

   await api.post('/favorite/register', {userId, bookId}, {headers: {Authorization: `Bearer ${token}`}})
   
} 