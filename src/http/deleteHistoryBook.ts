import { api } from "../service/api";

export interface deleteHistoryBookTypeRequest{
    userId: string
    visibility: string
    historyBookId: number
    token: string
}

export async function deleteHistoryBook({historyBookId, token, userId, visibility}: deleteHistoryBookTypeRequest) {

    await api.patch(`/user/delete/${historyBookId}`, {userId, visibility}, {headers: {Authorization: `Bearer ${token}`}})
} 