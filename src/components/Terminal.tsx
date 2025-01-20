'use client'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface TerminalProps {
  filename: string
  code: string
  language?: string
}

export default function Terminal({ filename, code, language = 'rust' }: TerminalProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-[#1E1E1E] shadow-2xl border border-gray-800">
      <div className="flex items-center px-4 py-3 bg-[#2D2D2D] border-b border-gray-800">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        <div className="flex items-center gap-2 flex-1">
          <span className="text-gray-400 text-sm font-mono">{filename}</span>
          <div className="flex-1 flex justify-end">
            <code className="text-xs text-gray-500">{language}</code>
          </div>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: '#1E1E1E',
          fontSize: '0.875rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
} 