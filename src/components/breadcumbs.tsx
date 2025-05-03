'use client'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav className="text-sm flex flex-wrap gap-1">
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1
        return (
          <span key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 font-black text-mine-bordeau">{'>>'}</span>}
            <span
              className={`capitalize ${
                isLast ? 'font-bold text-black' : 'text-mine-bordeau'
              }`}
            >
              {decodeURIComponent(segment).replace(/-/g, ' ')}
            </span>
          </span>
        )
      })}
    </nav>
  )
}
