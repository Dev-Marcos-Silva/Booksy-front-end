import { api } from "../service/api";

export interface putAcceptTypeRequest{
    rendBookId: number
    isAccepted: string
    token: string
}

export async function putAccept({rendBookId, isAccepted, token} : putAcceptTypeRequest) {

    await api.put(`/library/accept/${rendBookId}`, { isAccepted }, {headers: {Authorization: `Bearer ${token}`}})
} 