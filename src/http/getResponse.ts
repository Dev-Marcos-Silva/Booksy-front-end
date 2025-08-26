import { api } from "../service/api";

export interface getResponseTypeRequest{
    commentId: number
    token: string
}

export interface getResponseTypeResponse{
    id: number
    response: string
    created_at: string
    comment_id: number
    library_id: string
}

export async function getResponse({commentId, token} : getResponseTypeRequest): Promise<getResponseTypeResponse | null> {

    const { data } = await api.get<getResponseTypeResponse | null>(`/library/response/${commentId}`, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

    return data
} 