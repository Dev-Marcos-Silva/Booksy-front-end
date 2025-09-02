import { api } from "../service/api";

export interface getCommentTypeRequest{
    bookId: string
    token: string
}

export interface getCommentTypeResponse{
    id: number
    created_at: string
    comment: string
    book_id: string
    user: {
        name: string
        avatar: string | null
    }
}

export async function getComment({bookId, token} : getCommentTypeRequest): Promise<getCommentTypeResponse[] | null > {

    const { data } = await api.get<{commentWithUser: getCommentTypeResponse[] | null }>(`/comment/get/${bookId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.commentWithUser
} 