import Image from 'next/image'
import Link from 'next/link'

type CardProductProps = {
  colSpan?: number
  rowSpan?: number
  link: string
  img: string
}

export function CardProduct({ img, link, colSpan, rowSpan }: CardProductProps) {
  return (
    <Link
      href={link}
      className={`
          group 
          relative 
          col-span-${colSpan}
          row-span-${rowSpan}
          rounded-lg 
          bg-zinc-900
          overflow-hidden
          flex justify-center
          items-center

        `}
    >
      <Image
        src={img}
        alt=""
        width={920}
        height={920}
        quality={100}
        className={`
            group-hover:scale-105 transition-transform duration-500
          `}
      />

      <div
        className={`
          absolute
          bottom-10
          right-10
          h-12
          flex
          items-center
          gap-2
          max-w-[280px]
          rounded-full
          border-2
          border-zinc-500
          bg-black/60
          p-1
          pl-5
          
        `}
      >
        <span className="text-sm truncate">Titulo</span>
        <span
          className={`
          flex 
          h-full 
          items-center 
          justify-center 
          rounded-full 
          bg-violet-500 
          px-4 
          font-semibold
        `}
        >
          R$ 9,99
        </span>
      </div>
    </Link>
  )
}
