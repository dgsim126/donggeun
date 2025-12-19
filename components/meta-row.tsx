import type React from "react"
interface MetaRowProps {
  label: string
  value: string | React.ReactNode
}

export function MetaRow({ label, value }: MetaRowProps) {
  return (
    <div className="flex gap-4 mb-2 text-sm">
      <span className="text-muted-foreground min-w-20">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  )
}
