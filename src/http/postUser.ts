import { api } from "../service/api";

export interface postUserTypeRequest{
    name: string
    email: string
    password: string
}

export async function postUser({name, email, password}: postUserTypeRequest) {

   await api.post('/user', {name, email, password})

} 