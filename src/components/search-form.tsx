'use client'
import { FormEvent, useEffect, useState } from 'react'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const [search, setSearch] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!search) {
      return null
    }

    router.push(`/search?q=${search}`)
  }

  useEffect(() => {
    if (query) {
      setSearch(query)
    } else {
      setSearch('')
    }
  }, [query])

  return (
    <form
      onSubmit={handleSearch}
      className={`
          flex 
          w-[320px] 
          items-center 
          gap-3 
          rounded-full 
          bg-zinc-900 
          px-5 
          py-3
          ring-zinc-700
        `}
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        type="text"
        name="q"
        autoComplete="off"
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}
