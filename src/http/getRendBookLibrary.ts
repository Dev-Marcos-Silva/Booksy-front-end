import { api } from "../service/api";

export interface getRendBookLibraryTypeRequest{
    libraryId: string
    token: string
}

export interface getRendBookLibraryTypeResponse{
    id: number
    name: string | undefined
    avatar: string | null | undefined
    email: string | undefined
    ddd: string | undefined
    phone: string | undefined
    city: string | undefined
    street: string | undefined
    neighborhood: string | undefined
    number: string | undefined
    image: string | null | undefined
    title: string | undefined
    author: string | undefined
    edition: string | undefined
    category: string | undefined
    deliveryDate: string | null
    isAccept: string | undefined
    date: string | undefined
}

export async function getRendBookLibrary({libraryId, token} : getRendBookLibraryTypeRequest): Promise<getRendBookLibraryTypeResponse[]> {

    const { data } = await api.get<{rendBookWithUser: getRendBookLibraryTypeResponse[]}>(`/library/rented/book/${libraryId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data.rendBookWithUser
} 