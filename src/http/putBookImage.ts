import { api } from "../service/api";

export interface putBookImageTypeRequest{
    bookId: string
    image: string
    token: string
}

export async function putBookImage(data : putBookImageTypeRequest) {

    const { bookId, token, image } = data

    const file = await fetch(image).then(img => img.blob())

    const formData = new FormData()

    formData.append("image", file)

    await api.patch(`/image/book/${bookId}`, formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
} 