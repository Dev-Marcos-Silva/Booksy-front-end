import { api } from "../service/api";

export interface putDeliverTypeRequest{
    rendBookId: number
    token: string
}

export async function putDeliver({rendBookId, token} : putDeliverTypeRequest) {

    await api.put(`/library/deliver/${rendBookId}`, {}, {headers: {Authorization: `Bearer ${token}`}})
} 