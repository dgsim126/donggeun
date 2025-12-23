import type React from "react"

interface TechBadgeProps {
  children: React.ReactNode
}

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 bg-muted text-foreground text-[11px] sm:text-xs font-medium rounded-full border border-border">
      {children}
    </span>
  )
}
