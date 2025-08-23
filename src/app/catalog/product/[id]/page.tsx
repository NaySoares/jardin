'use client'
import { useParams } from 'next/navigation'

export default function ProductPage() {
  const { id } = useParams()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Produto</h1>
      <p className="mt-4 text-lg">Detalhes sobre o produto {id}</p>
    </div>
  )
}
