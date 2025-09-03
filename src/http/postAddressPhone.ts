import { api } from "../service/api";

export interface postAddressPhoneTypeRequest{
    userId: string
    ddd: string
    phone: string
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    token: string
}

export async function postAddressPhone(data: postAddressPhoneTypeRequest) {

    const {userId, token, ...baseData} = data

    await api.post(`/user/address/${userId}`, baseData, {headers: {Authorization: `Bearer ${token}`}})

} 