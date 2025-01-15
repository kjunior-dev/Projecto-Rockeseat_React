import {api} from "../lib/axios.ts";

export interface GetManagerRestautantResponse {
    id: string
    name: string
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    managerId: string | null
}
export async function getManagerRestautant(){

    const response = await api.get<GetManagerRestautantResponse>('/managed-restaurant')
    return response.data

}