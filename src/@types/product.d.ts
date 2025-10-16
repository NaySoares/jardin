export type ProductType = 'FRUIT' | 'VEGETABLE' | 'FLOWER'

export interface IProduct {
  id: number
  name: string
  description: string
  type: ProductType
  price: string // TODO: alterar para number
  imageUrl?: string
  createdAt: string // 2025-10-10T03:22:00.375Z
  updatedAt: string // 2025-10-10T03:22:00.375Z
  userId: number
}
