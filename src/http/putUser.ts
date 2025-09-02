import { api } from "../service/api";

export interface putUserTypeRequest{
    userId: string
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

export async function putUser(data : putUserTypeRequest) {

    const { userId, token, ...baseData} = data

    await api.patch(`/user/update/${userId}`, baseData, {headers: {Authorization: `Bearer ${token}`}})
} 