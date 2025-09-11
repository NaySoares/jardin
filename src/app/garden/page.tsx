import { GardenCard } from '@/components/GardenCard'

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

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex flex-col gap-6 max-w-4xl">
        {gardens.map((garden, index) => (
          <GardenCard
            key={index}
            imageUrl={garden.imageUrl}
            type={garden.type}
            title={garden.title}
            description={garden.description}
            price={garden.price}
          />
        ))}
      </div>
    </div>
  )
}
