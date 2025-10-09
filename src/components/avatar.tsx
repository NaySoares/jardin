import { cn } from '@/helpers/twUtils'
import Image from 'next/image'
import Link from 'next/link'

interface IAvatar {
  img: string
  size?: number
  url?: string
}

export const Avatar = ({ img, size = 40, url }: IAvatar) => {
  return (
    <div
      className={cn(
        'relative',
        { 'w-auto h-auto': !size },
        { 'w-10 h-10': size === 40 },
      )}
    >
      <Link href={url || '#'}>
        <Image
          src={img}
          width={size}
          height={size}
          alt="Avatar do usuário"
          className={`rounded-full border-2 border-white shadow-md`}
        />
      </Link>
    </div>
  )
}
