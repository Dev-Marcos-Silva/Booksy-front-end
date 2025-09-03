import { api } from "../service/api";

export interface putLibraryTypeRequest{
    libraryId: string
    name: string
    email: string
    cep: string
    newPassword: string
    oldPassword: string
    city: string
    neighborhood: string
    street: string
    number: string
    phone: string
    token: string
}

export async function putLibrary(data : putLibraryTypeRequest) {

    const { libraryId, token, ...baseData} = data

    await api.patch(`/library/update/${libraryId}`, baseData, {headers: {Authorization: `Bearer ${token}`}})
} 