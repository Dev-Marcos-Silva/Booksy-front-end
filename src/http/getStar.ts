import { api } from "../service/api";

export interface getStarTypeRequest{
    bookId: string
    token: string
}

export interface getStarTypeResponse{
    id: number;
    created_at: string;
    star: number;
    book_id: string;
    user_id: string
}

export async function getStar({bookId, token} : getStarTypeRequest): Promise<getStarTypeResponse[] | null > {

    const { data } = await api.get<{assessments: getStarTypeResponse[] | null }>(`/assessment/get/${bookId}`, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

    return data.assessments
} 