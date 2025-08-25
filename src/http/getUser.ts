import { api } from "../service/api";

export interface getUserTypeRequest{
    userId: string
    token: string
}

export interface getUserTypeResponse{
    name: string
    image: string
    email: string
	city: string
	neighborhood: string
	street: string
	number: string
    ddd: string
	phone: string
}

export async function getUser({userId, token} : getUserTypeRequest): Promise<getUserTypeResponse> {

    const { data } = await api.get<getUserTypeResponse>(`/user/profile/${userId}`, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

    return data
} 