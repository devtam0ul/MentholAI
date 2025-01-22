export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  return (
    <div role="main" className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      {children}
    </div>
  )
} 