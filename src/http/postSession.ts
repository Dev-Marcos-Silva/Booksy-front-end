import { api } from "../service/api"

export interface PostSessionTypeRequest{
    email: string
    password: string
}

export interface PostSessionTypeReponse{
    type: string
    id: string
    token: string
}

export async function postSession({email, password}: PostSessionTypeRequest): Promise<PostSessionTypeReponse> {

    const { data } = await api.post<PostSessionTypeReponse>('/session', {email, password})

    return data
}