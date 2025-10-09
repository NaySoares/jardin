import { ProductCard } from '@/components/productCard'

export default function CatalogPage() {
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
        <ProductCard url="/catalog/product/1" />
        <ProductCard url="/catalog/product/2" />
        <ProductCard url="/catalog/product/3" />
        <ProductCard url="/catalog/product/4" />
        <ProductCard url="/catalog/product/5" />
        <ProductCard url="/catalog/product/6" />
      </div>
    </div>
  )
}
