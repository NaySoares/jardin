import { IGarden } from '@/@types/garden'
import { api } from './api'

export const getGardens = async (): Promise<IGarden[]> => {
  try {
    const response = await api.get('/gardens')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getGarden = async (id: string): Promise<IGarden | null> => {
  try {
    const response = await api.get(`/gardens/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
