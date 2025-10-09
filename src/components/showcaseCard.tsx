import Image from 'next/image'
import Link from 'next/link'

interface IShowcaseCard {
  imageUrl: string
  title: string
  description: string
  href: string
}

export const ShowcaseCard = ({
  imageUrl,
  title,
  description,
  href,
}: IShowcaseCard) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <Link href={href}>
        <Image
          src={imageUrl}
          alt="Showcase"
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-base font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-700 mb-4">{description}</p>
        </div>
      </div>
    </div>
  )
}
