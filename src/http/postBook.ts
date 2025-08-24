import { api } from "../service/api";

export interface postBookTypeRequest{
    image: string
    libraryId: string
    author: string
    title: string
    description: string
    category: string
    edition: string
    finishing: string
    year_publi: string
    isbn: string
    dimensions: string
    page: string           
    amount: string 
    token: string
}

export async function postBook(data : postBookTypeRequest) {

    const { libraryId, token, image, amount, page, ...baseData } = data

    const newData ={
        ...baseData,
        page: Number(page),
        amount: Number(amount)
    }

    // fetch consegue recuperar o blob pela url
    const file = await fetch(image).then(img => img.blob())

    const formData = new FormData()

    formData.append("image", file)
    formData.append("data", JSON.stringify(newData))

    await api.post(`/register/book/${libraryId}`, formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data",}})

} 