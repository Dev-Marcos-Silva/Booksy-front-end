import { api } from "../service/api";

export interface getRendBookUserTypeRequest{
    userId: string
    token: string
}

export interface getRendBookUserTypeResponse{
    id: number
    name: string | undefined
    avatar: string | null | undefined
    email: string | undefined
    ddd: string | undefined
    phone: string | undefined
    street: string | undefined
    neighborhood: string | undefined
    number: string | undefined
    bookId: string | undefined
    image: string | null | undefined
    title: string | undefined
    author: string | undefined
    stars: {
        id: number
        created_at: string
        star: number
        book_id: string
        user_id: string
    }[]
    isAccept: string | undefined
    isComplete: string | undefined
    userVisibility: string
    orderDate: string | null
    deliveryDate: string | null
    returnDate: string | null
    endDate: string | null
    date: string | undefined
}

export async function getRendBookUser({userId, token} : getRendBookUserTypeRequest): Promise<getRendBookUserTypeResponse[]> {

    const { data } = await api.get<{rendBookWithLibrary: getRendBookUserTypeResponse[]}>(`/user/rented/book/${userId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.rendBookWithLibrary
} 