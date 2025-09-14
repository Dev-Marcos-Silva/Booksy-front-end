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
    user: {
        id: string
        name: string
        avatar: string | null
    }
}

export async function getAssessment({bookId, token} : getAssessmentTypeRequest): Promise<getAssessmentTypeResponse[] | null > {

    const { data } = await api.get<{assessmentWithUser: getAssessmentTypeResponse[] | null }>(`/assessment/get/${bookId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.assessmentWithUser
} 