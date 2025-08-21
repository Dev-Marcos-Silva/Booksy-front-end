import { api } from "../service/api";

export interface postLibraryTypeRequest{
    image: string
    userId: string
    name: string
    email: string
    password: string
    ddd: string
    phone: string
    cnpj: string
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    token: string
}

export async function postLibrary(data : postLibraryTypeRequest) {

    const { userId, token, image, ...newData } = data

    // fetch conseguer recuperar o blob pela url
    const file = await fetch(image).then(img => img.blob())

    const formData = new FormData()

    formData.append("image", file)
    formData.append("data", JSON.stringify(newData))

    await api.post(`/library/${userId}`, formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

} 