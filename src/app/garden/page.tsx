import { GardenCard } from '@/components/GardenCard'
import Image from 'next/image'

interface IFilter {
  item: itemsFilter[]
}

interface itemsFilter {
  label: string
  value: string
}

export default function GardenPage() {
  const gardens = [
    {
      imageUrl: '/images/jardim1.png',
      type: 'Pequeno',
      title: 'Jardim em Nazaré',
      description:
        'Jardim bem localizado no centro de Belém, terra fértil e com fácil manuseio.',
      price: 325,
    },
    {
      imageUrl: '/images/jardim2.png',
      type: 'Pequeno',
      title: 'Jardim em Nazaré',
      description:
        'Jardim bem localizado no centro de Belém, terra fértil e com fácil manuseio.',
      price: 325,
    },
  ]

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

  return (
    <div className="flex flex-col min-h-screen p-8">
      <div className="flex flex-row gap-4 justify-start items-center">
        <FilterSelect item={filterPrices} />
        <FilterSelect item={filterAvailability} />
      </div>
      <div className="w-full flex flex-row justify-center gap-4">
        <div className="flex flex-col gap-6 max-w-4xl">
          {gardens.map((garden, index) => (
            <GardenCard
              key={index}
              imageUrl={garden.imageUrl}
              type={garden.type}
              title={garden.title}
              description={garden.description}
              price={garden.price}
              url={`/garden/${index + 1}`}
            />
          ))}
        </div>
        <div className="">
          <Image
            src="/images/map.jpg"
            alt="Map"
            width={700}
            height={900}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
