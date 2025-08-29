import { api } from "../service/api";

export interface getLibraryTypeRequest{
    libraryId: string
    token: string
}

export interface getLibraryTypeResponse{
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

export async function getLibrary({libraryId, token} : getLibraryTypeRequest): Promise<getLibraryTypeResponse> {

    const { data } = await api.get<getLibraryTypeResponse>(`/library/profile/${libraryId}`, {headers: {Authorization: `Bearer ${token}`}})

    return data
} 