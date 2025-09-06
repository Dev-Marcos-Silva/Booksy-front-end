import { api } from "../service/api";

export interface putCompleteTypeRequest{
    rendBookId: number
    isComplete: string
    token: string
}

export async function putComplete({rendBookId, isComplete, token} : putCompleteTypeRequest) {

    await api.put(`/library/complete/${rendBookId}`, { isComplete }, {headers: {Authorization: `Bearer ${token}`}})
} 