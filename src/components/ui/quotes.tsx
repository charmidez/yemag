import React from 'react'

type QuoteProps = {
  children: React.ReactNode
  author?: string
}

export default function Quote({ children, author }: QuoteProps) {
  return (
    <blockquote className="border-l-4 border-mine-bordeau pl-4 text-gray-700 bg-mine-white py-3 px-4">
      <p className="mb-2">{children}</p>
      {author && (
        <footer className="text-sm text-gray-500 text-left mt-2 font-bold">— {author}</footer>
      )}
    </blockquote>
  )
}
