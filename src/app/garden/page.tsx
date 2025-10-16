'use client'
import { IGarden } from '@/@types/garden'
import { GardenCard } from '@/components/GardenCard'
import { getGardens } from '@/services/gardenService'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface IFilter {
  item: itemsFilter[]
}

interface itemsFilter {
  label: string
  value: string
}

export default function GardenPage() {
  const [gardens, setGardens] = useState<IGarden[]>([])

  useEffect(() => {
    const fetchGardens = async () => {
      const data = await getGardens()
      setGardens(data)
    }

    fetchGardens()
  }, [])

  const filterPrices = [
    { label: 'Menor preço', value: 'low' },
    { label: 'Maior preço', value: 'high' },
  ]

  const filterAvailability = [
    { label: 'Disponível', value: 'available' },
    { label: 'Indisponível', value: 'unavailable' },
  ]

  const FilterSelect = ({ item }: IFilter) => {
    return (
      <select className="text-xs border border-gray-300 rounded-lg cursor-pointer p-2 py-1 w-fit max-w-[150px] mb-4">
        {item.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    )
  }

  const NoContent = () => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full min-w-[500px]">
        <p className="text-lg text-gray-500">Nenhum jardim encontrado.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row gap-4 justify-start items-center">
        <FilterSelect item={filterPrices} />
        <FilterSelect item={filterAvailability} />
      </div>
      <div className="w-full flex flex-row justify-center gap-4">
        <div className="flex flex-col gap-6 max-w-4xl">
          {gardens.length > 0 ? (
            gardens.map((garden) => (
              <GardenCard
                key={garden.id}
                imageUrl="/images/jardim1.png"
                size={garden.size}
                title={garden.name}
                description={garden.description}
                price={Number(garden.price)}
                url={`/garden/${garden.id}`}
              />
            ))
          ) : (
            <NoContent />
          )}
        </div>
        <div className="lg:flex hidden">
          <Image
            src="/images/map.jpg"
            alt="Map"
            width={700}
            height={900}
            className="rounded-lg shadow-md max-h-[600px]"
          />
        </div>
      </div>
    </div>
  )
}
