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
