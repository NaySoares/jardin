'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface IProductCard {
  url: string
}

export const ProductCard = ({ url }: IProductCard) => {
  const { push } = useRouter()

  const navigateTo = () => {
    push(url)
  }

  const priceDefault = 120
  return (
    <div className="shadow-md overflow-hidden flex flex-row">
      <div className="relative w-56 flex-shrink-0 flex">
        <Image
          src={'/images/maca_cop30.png'}
          alt="Maçã Cop30"
          width={224}
          height={168}
          objectFit="cover"
          className="rounded-md m-2"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between w-full">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-sm font-bold">
              Maçã Cop30 - R$ {priceDefault.toFixed(2)}
            </h2>
          </div>
          <p className="text-gray-700 mt-2 text-xs">Descrição da maçã Cop30</p>
        </div>
        <div className="flex items-center justify-center w-full mt-4">
          <button
            className="w-full text-white py-2 px-4 rounded max-w-[120px] cursor-pointer transition-colors duration-300 bg-[#DE3151] hover:bg-[#B82A3C]"
            onClick={() => navigateTo()}
          >
            <p className="text-xs font-bold">Comprar</p>
          </button>
        </div>
      </div>
    </div>
  )
}
