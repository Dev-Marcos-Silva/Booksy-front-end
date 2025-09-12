import { api } from "../service/api"

export interface PostSessionTypeRequest{
    email: string
    password: string
}

export interface PostSessionTypeResponse{
    id: string
    type: string
    token: string
}

export async function postSession({email, password}: PostSessionTypeRequest): Promise<PostSessionTypeResponse> {

    const { data } = await api.post<PostSessionTypeResponse>('/session', {email, password})

    return data
}