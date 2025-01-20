'use client'

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <pre className="relative rounded-lg overflow-x-auto">
      <div className="absolute top-0 right-0 px-4 py-2 text-sm text-gray-400">
        {language}
      </div>
      <code className="block p-6 text-gray-300 text-sm font-mono">
        {code}
      </code>
    </pre>
  )
} 