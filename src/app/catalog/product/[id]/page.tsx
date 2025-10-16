'use client'
import { IProduct } from '@/@types/product'
import { getProduct } from '@/services/productService'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductPage() {
  const { id } = useParams()
  const [count, setCount] = useState(1)
  const [product, setProduct] = useState<IProduct | null>(null)
  const isRich = count > 10

  useEffect(() => {
    const fetchProduct = async (id: string) => {
      const data = await getProduct(id)
      setProduct(data)
    }

    if (typeof id === 'string') {
      fetchProduct(id)
    }
  }, [id])

  const priceProduct = product?.price ? Number(product.price) : 0

  const ButtonCounter = () => {
    return (
      <div className="flex flex-row bg-[#de5e6f] rounded">
        <button
          className="font-bold bg-[#DE3151] text-white px-2 py-1 rounded-l cursor-pointer hover:scale-105 duration-300"
          onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
        >
          {'-'}
        </button>
        <span className="px-3 py-2 cursor-default text-white">{count}</span>
        <button
          className="font-bold bg-[#DE3151] text-white px-2 py-1 rounded-r cursor-pointer hover:scale-105 duration-300"
          onClick={() => setCount((prev) => prev + 1)}
        >
          {'+'}
        </button>
      </div>
    )
  }

  const DeliveryTable = () => {
    return (
      <div className="w-full flex flex-col gap-1">
        <table className="w-full text-sm text-left text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-1 text-center">
                Opção de Entrega
              </th>
              <th scope="col" className="px-2 py-1 text-center">
                Prazo
              </th>
              <th scope="col" className="px-2 py-1 text-center">
                Preço
              </th>
            </tr>
          </thead>
          <tbody>
            {!isRich && (
              <tr className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="px-2 py-1 text-center font-medium text-gray-900 whitespace-nowrap"
                >
                  Padrão
                </th>
                <td className="px-2 py-1 text-center">3-5 dias úteis</td>
                <td className="px-2 py-1 text-center">Grátis</td>
              </tr>
            )}
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-2 py-1 font-medium text-center text-gray-900 whitespace-nowrap"
              >
                Expresso
              </th>
              <td className="px-2 py-1 text-center">1-2 dias úteis</td>
              <td className="px-2 py-1 text-center">
                {isRich ? 'R$ 49,90' : 'R$ 19,90'}
              </td>
            </tr>
          </tbody>
        </table>
        {isRich && (
          <p className="text-[10px] text-center">
            Quem queremos enganar? Você não precisa de desconto.
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-row items-start justify-center gap-4 p-4">
      <div className="w-full object-cover max-w-lg">
        <Image
          src={'/images/maca_cop30.png'}
          alt={'Imagem Principal'}
          width={800}
          height={800}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col w-full max-w-[400px]">
        <header className="w-full p-4 flex flex-col justify-start items-start border-b mb-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{product?.name}</h1>
            <p className="text-base text-gray-500">
              R$ {priceProduct.toFixed(2)}
            </p>
          </div>
        </header>
        <div className="p-4 flex flex-col justify-center items-center w-full gap-4">
          <p className="text-sm">{product?.description}</p>
          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-col items-start">
              <p className="text-sm font-bold">Quantidade</p>
              <ButtonCounter />
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-bold">Valor Total</p>
              <p className="text-lg font-bold">
                R$ {(priceProduct * count).toFixed(2)}
              </p>
            </div>
          </div>
          <DeliveryTable />
          <button
            className=" text-white p-2 w-full max-w-[200px] cursor-pointer rounded  transition-colors bg-[#DE3151] hover:bg-[#B82A3C] mt-4"
            onClick={() => alert('Produto comprado com sucesso!')}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
