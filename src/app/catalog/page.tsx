'use client'
import { IProduct } from '@/@types/product'
import { ProductCard } from '@/components/productCard'
import { getProducts } from '@/services/productService'
import { useEffect, useState } from 'react'

export default function CatalogPage() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProducts(data)
    }

    fetchProducts()
  }, [])

  const FilterSelect = () => {
    return (
      <select className="text-xs border border-gray-300 rounded-lg cursor-pointer p-2 py-1 w-fit max-w-[150px] mb-4">
        <option value="all">Todos</option>
        <option value="fruits">Frutas</option>
        <option value="vegetables">Vegetais</option>
        <option value="flowers">Flores</option>
      </select>
    )
  }
  return (
    <div className="min-h-screen flex flex-col p-4">
      <FilterSelect />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            url={`/catalog/product/${product.id}`}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
