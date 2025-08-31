import { api } from "../service/api";

export interface postCommentTypeRequest{
    userId: string
    bookId: string
    token: string
    text: string
}

export async function postComment({userId, bookId, text, token}: postCommentTypeRequest) {

   await api.post('/comment/register', {userId, bookId, text}, {headers: {Authorization: `Bearer ${token}`}})
} 