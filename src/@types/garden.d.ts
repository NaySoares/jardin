export interface IGarden {
  id: number
  name: string
  description: string
  latitude: string // -49.2733
  longitude: string // -49.2733
  status: GardenStatus
  size: string // TODO: alterar para number
  price: string // TODO: alterar para number
  imageUrl: string
  createdAt: string // 2025-10-10T03:22:00.375Z
  updatedAt: string // 2025-10-10T03:22:00.375Z
  userId: number
  address: string
}

type GardenStatus = 'AVAILABLE' | 'RESERVED'
