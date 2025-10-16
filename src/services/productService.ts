import { api } from './api'
import { IProduct } from '@/@types/product'

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getProduct = async (id: string): Promise<IProduct | null> => {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}
