import { api } from "../service/api";

export interface putUserImageTypeRequest{
    userId: string
    image: string
    token: string
}

export async function putUserImage(data : putUserImageTypeRequest) {

    const { userId, token, image } = data

    const file = await fetch(image).then(img => img.blob())

    const formData = new FormData()

    formData.append("image", file)

    await api.patch(`/user/avatar/${userId}`, formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
} 