import type React from "react"
interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-2xl font-bold mb-8 text-foreground">{children}</h2>
}
