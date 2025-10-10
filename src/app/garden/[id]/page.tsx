'use client'
import { IGarden } from '@/@types/garden'
import { Avatar } from '@/components/avatar'
import { GridImages } from '@/components/gridImages'
import { RentCard } from '@/components/rentCard'
import { getGarden } from '@/services/gardenService'
import {
  HeartIcon,
  ShareIcon,
  DoorClosedIcon,
  SparklesIcon,
} from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface IButtonLink {
  label: string
  icon: React.ReactNode
}

interface IDetails {
  icon: React.ReactNode
  title: string
  message?: string
}

export default function GardenPage() {
  const { id } = useParams()
  const [garden, setGarden] = useState<IGarden | null>(null)

  useEffect(() => {
    const fetchGarden = async (id: string) => {
      const data = await getGarden(id)
      setGarden(data)
    }

    if (typeof id === 'string') {
      fetchGarden(id)
    }
  }, [id])

  const gardenLocation = 'Nazaré, Belém'
  const imageUrls = [
    {
      src: '/images/jardim1.png',
      alt: 'Jardim 1',
      main: true,
    },
    {
      src: '/images/jardim2.png',
      alt: 'Jardim 2',
      main: false,
    },
    {
      src: '/images/banana.png',
      alt: 'Banana',
      main: false,
    },
    {
      src: '/images/maca_cop30.png',
      alt: 'Maçã',
      main: false,
    },
    {
      src: '/images/image_home.jpg',
      alt: 'Imagem Home',
      main: false,
    },
  ]

  const buttonLink = ({ label, icon }: IButtonLink) => {
    return (
      <button className="hover:scale-110 transition-transform hover:cursor-pointer text-black p-1 rounded flex flex-row items-center gap-2">
        {icon}
        <p className="text-xs">{label}</p>
      </button>
    )
  }

  const HeaderGardenPage = () => {
    return (
      <header className="w-full p-4 flex flex-row justify-between items-center border-b">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{garden?.name}</h1>
          <p className="text-xs text-gray-500 text-decoration-line: underline">
            {gardenLocation}
          </p>
        </div>
        <div className="flex flex-row gap-2">
          {buttonLink({ label: 'Compartilhar', icon: <ShareIcon size={12} /> })}
          {buttonLink({ label: 'Salvar', icon: <HeartIcon size={12} /> })}
        </div>
      </header>
    )
  }

  const Details = ({ icon, title, message }: IDetails) => {
    return (
      <div className="flex flex-row gap-2 justify-start items-center my-1">
        {icon}
        <div className="flex flex-col">
          <p className="text-sm">{title}</p>
          {message && <p className="text-xs text-gray-500">{message}</p>}
        </div>
      </div>
    )
  }

  return (
    <>
      {garden && (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <HeaderGardenPage />

          <GridImages imageUrls={imageUrls} />

          <div className="flex flex-row gap-2 w-full max-w-4xl justify-between">
            <div className="p-4 flex flex-col justify-start w-full gap-2">
              <header className="flex flex-row justify-between border-b items-center pb-2">
                <div className="flex flex-col flex-grow">
                  <h1 className="text-base font-bold">{garden.name}</h1>
                  <p className="text-xs text-gray-500">
                    {garden.size} | Pronto para cultivo
                  </p>
                </div>
                <Avatar
                  img="https://github.com/naysoares.png?size=200"
                  url="/"
                />
              </header>
              <div className="flex flex-col justify-start w-full border-b pb-2">
                <Details
                  icon={<SparklesIcon size={24} />}
                  title="Solo Fertilizado"
                  message="Solo tratado e verificado nos últimos 20 dias."
                />
                <Details
                  icon={<DoorClosedIcon size={24} />}
                  title="Acesso Direto"
                  message="Acesso ao local cedido pelo App."
                />
              </div>
              <div className="flex flex-col justify-start w-full border-b py-4">
                <p className="text-sm text-justify">{garden.description}</p>
              </div>
            </div>

            <RentCard price={garden?.price} />
          </div>
        </div>
      )}
    </>
  )
}
