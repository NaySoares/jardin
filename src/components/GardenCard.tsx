import Image from 'next/image'
import Link from 'next/link'

interface GardenCardProps {
  imageUrl: string
  size: string
  title: string
  description: string
  price: number
  url: string
}

export const GardenCard: React.FC<GardenCardProps> = ({
  imageUrl,
  size,
  title,
  description,
  price,
  url,
}) => {
  const convertSizeToType = (size: string): string => {
    const value = Number(size)

    if (!Number.isFinite(value)) return 'Tamanho não informado'

    return [
      { max: 50, label: 'Pequeno' },
      { max: 100, label: 'Médio' },
      { max: Infinity, label: 'Grande' },
    ].find(({ max }) => value < max)!.label
  }

  return (
    <Link href={url}>
      <div className="shadow-md overflow-hidden flex flex-row md:min-w-xl md:w-xl w-full">
        <div className="relative w-56 flex-shrink-0 flex">
          <Image
            src={imageUrl}
            alt={title}
            width={224}
            height={168}
            objectFit="cover"
            className="rounded-md m-2"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-500">
                  {convertSizeToType(size)}
                </p>
                <h2 className="text-xl font-bold">{title}</h2>
              </div>
              <button
                aria-label="Adicionar aos favoritos"
                className="hover:scale-110 transition-transform hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 hover:text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 mt-2 text-base">{description}</p>
          </div>
          <div className="text-right mt-4">
            <p className="text-base font-semibold">
              R${price}{' '}
              <span className="text-base font-normal text-gray-500">
                /temporada
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
