'use client'

import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:{' '}
        <span className="font-semibold">
          <Suspense>{query}</Suspense>
        </span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((product, index) => {
          return <Skeleton key={index} className="h-[480px]" />
        })}
      </div>
    </div>
  )
}
