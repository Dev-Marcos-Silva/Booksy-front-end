import { api } from "../service/api";

export interface postResponseTypeRequest{
    libraryId: string
    commentId: number
    token: string
    text: string
}

export async function postResponse({libraryId, commentId, text, token}: postResponseTypeRequest) {

   await api.post('/library/response', {libraryId, commentId, text}, {headers: {Authorization: `Bearer ${token}`}})
   
} 