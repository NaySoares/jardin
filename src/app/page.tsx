'use client'
import { IProduct } from '@/@types/product'
import { ShowcaseCard } from '@/components/showcaseCard'
import { getProducts } from '@/services/productService'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const imageBackground = '/images/image_home.jpg'

  const [products, setProducts] = useState<IProduct[]>([])
  const maxShowcaseItems = 4

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      const limitedData = data.slice(0, maxShowcaseItems)
      setProducts(limitedData)
    }

    fetchProducts()
  }, [])
  return (
    <>
      <div className="relative bg-black flex min-h-[calc(100vh-52px)] flex-col items-center justify-center p-4  object-cover overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src={imageBackground}
          alt="Background"
          className="absolute inset-0 h-full w-full opacity-70"
        />
        <h1 className="z-10 text-4xl font-bold text-white">
          O Jar-din que você sempre sonhou!
        </h1>
        <p className="z-10 mt-4 text-lg text-white">
          Aluguel de espaços verdes
        </p>
      </div>

      <div className="container mx-auto my-10 px-4">
        <h2 className="text-2xl font-bold mb-4">Produtos Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ShowcaseCard
              key={product.id}
              imageUrl={product.imageUrl || '/images/maca_cop30.png'}
              title={product.name}
              description={product.description}
              href={`/catalog/product/${product.id}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
