import { useState } from 'react'

interface IRentCard {
  price: string // TODO: alterar para number
}

export const RentCard = ({ price }: IRentCard) => {
  const [temps, setTemps] = useState<number>(1)

  const priceConverted = parseFloat(price)
  const priceDefault = isNaN(priceConverted) ? 0 : priceConverted
  const taxes = 30
  const ContainerSelectTime = () => {
    return (
      <div className="w-full flex flex-col gap-2 border border-gray-300 rounded p-2 mb-4">
        <div className="flex flex-col justify-start border-b border-gray-300 pb-2">
          <p className="text-[10px] font-bold">Duração da Temporada</p>
          <p className="text-sm text-gray-500">30 dias</p>
        </div>
        <div>
          <label className="text-[10px] font-bold">Número de Temporadas</label>
          <select
            className="w-full border border-gray-300 rounded p-2 text-xs cursor-pointer"
            value={temps}
            onChange={(e) => setTemps(Number(e.target.value))}
          >
            <option value={1}>1 temporada</option>
            <option value={2}>2 temporadas</option>
            <option value={3}>3 temporadas</option>
            <option value={4}>4 temporadas</option>
            <option value={5}>5 temporadas</option>
            <option value={6}>6 temporadas</option>
          </select>
        </div>
      </div>
    )
  }

  const ContainerDetails = () => {
    return (
      <div className="flex flex-col items-center px-4 py-2 justify-center w-full">
        <p className="text-xs font-medium text-gray-500">Detalhes</p>
        <div className="flex flex-col gap-1 mt-2 w-full">
          <div className="flex flex-row justify-between w-full">
            <p className="text-xs">
              R$ {priceDefault.toFixed(0)} x {temps} Temporadas
            </p>
            <p className="text-xs">R$ {(priceDefault * temps).toFixed(0)}</p>
          </div>
          <div className="flex flex-row justify-between w-full">
            <p className="text-xs">Taxa de Serviço</p>
            <p className="text-xs">R$ {taxes}</p>
          </div>
        </div>
      </div>
    )
  }

  const handleRent = () => {
    alert(
      `Uma maravilhosa locação de ${temps} temporadas por singelos R$ ${(priceDefault * temps + taxes).toFixed(0)}!`,
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col min-w-64">
      <header className="p-2 flex items-center justify-center">
        <h3 className="text-base font-medium">R$ {priceDefault.toFixed(0)}</h3>
        <p className="text-sm">/ temporada</p>
      </header>
      <div className="p-4 flex-grow">
        <ContainerSelectTime />
        <button
          className="w-full text-white py-2 px-4 rounded cursor-pointer transition-colors duration-300 bg-[#DE3151] hover:bg-[#B82A3C]"
          onClick={() => handleRent()}
        >
          <p className="text-xs font-bold">Alugar</p>
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <ContainerDetails />
      </div>
      <footer className="p-4 border-t border-gray-300 flex flex-row justify-between w-full">
        <p className="text-xs font-bold">Total</p>
        <p className="text-xs font-bold">
          R$ {(priceDefault * temps + taxes).toFixed(0)}
        </p>
      </footer>
    </div>
  )
}
