import { api } from "../service/api";

export interface putLibraryImageTypeRequest{
    libraryId: string
    image: string
    token: string
}

export async function putLibraryImage(data : putLibraryImageTypeRequest) {

    const { libraryId, token, image } = data

    const file = await fetch(image).then(img => img.blob())

    const formData = new FormData()

    formData.append("image", file)

    await api.patch(`/library/avatar/${libraryId}`, formData, {headers: {Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"}})
} 