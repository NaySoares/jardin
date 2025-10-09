import { cn } from '@/helpers/twUtils'
import Image from 'next/image'

interface IGridImage {
  imageUrls: dataImage[]
}

interface dataImage {
  src: string
  alt?: string
  main?: boolean
}

// grid com 1 imagem principal e 4 menores

export const GridImages = ({ imageUrls }: IGridImage) => {
  const imageMain = imageUrls.find((img) => img.main) || imageUrls[0]

  const ContainerImage = (img: dataImage) => {
    return (
      <div
        key={img.src}
        className="rounded-md overflow-hidden w-41 h-41 hover:cursor-pointer hover:scale-105 duration-300"
      >
        <Image
          src={img.src}
          alt={img.alt || 'Imagem'}
          width={800}
          height={800}
          className="w-full h-48 object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={cn('w-full max-w-4xl my-8 flex flex-row justify-between', {
        'flex flex-row justify-center items-center': imageUrls.length <= 1,
      })}
    >
      <div className="w-full object-cover grid grid-cols-1 max-w-lg hover:cursor-pointer hover:scale-105 duration-300">
        <Image
          src={imageMain.src}
          alt={imageMain.alt || 'Imagem Principal'}
          width={700}
          height={400}
          className="rounded-md"
        />
      </div>
      {imageUrls.length > 1 && (
        <div className="grid grid-cols-2 gap-2 h-full ">
          {imageUrls
            .filter((img) => !img.main)
            .map((img, index) => (
              <ContainerImage key={index} {...img} />
            ))}
        </div>
      )}
    </div>
  )
}
