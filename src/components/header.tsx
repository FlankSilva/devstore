import Link from 'next/link'
import { Suspense } from 'react'
import { SearchForm } from './search-form'
import { CardWidget } from './card-widget'
import Image from 'next/image'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={'/'} className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense>
          <SearchForm />
        </Suspense>
      </div>

      <div className="flex items-center gap-4">
        <CardWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link
          href="/"
          className={`
            flex
            items-center
            gap-2
            hover:underline
          `}
        >
          <span>Account</span>

          <Image
            src="https://github.com/FlankSilva.png"
            alt="Flank"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full"
          />
        </Link>
      </div>
    </header>
  )
}
