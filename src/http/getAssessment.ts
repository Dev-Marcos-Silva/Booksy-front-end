import { api } from "../service/api";

export interface getAssessmentTypeRequest{
    bookId: string
    token: string
}

export interface getAssessmentTypeResponse{
    id: number
    created_at: string
    star: number
    book_id: string
    user_id: string
}

export async function getAssessment({bookId, token} : getAssessmentTypeRequest): Promise<getAssessmentTypeResponse[] | null > {

    const { data } = await api.get<{assessments: getAssessmentTypeResponse[] | null }>(`/assessment/get/${bookId}`, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

    return data.assessments
} 