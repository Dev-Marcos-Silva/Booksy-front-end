import { api } from "../service/api";

export interface deleteFavoriteBookTypeRequest{
    userId: string
    bookId: string
    token: string
}

export async function deleteFavoriteBook({userId, bookId, token}: deleteFavoriteBookTypeRequest) {

    await api.request({method: "DELETE", url: "/favorite/delete", data: { userId, bookId }, headers: { Authorization: `Bearer ${token}` },})
} 