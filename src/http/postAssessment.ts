import { api } from "../service/api";

export interface postAssessmentTypeRequest{
    userId: string
    bookId: string
    token: string
    star: number
}

export async function postAssessment({userId, bookId, star, token}: postAssessmentTypeRequest) {

   await api.post('/assessment/register', {userId, bookId, star}, {headers: {Authorization: `Bearer ${token}`}})
} 