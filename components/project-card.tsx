import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  summary: string
  href: string
  large?: boolean
  imageSrc?: string
  imageAlt?: string
}

export function ProjectCard({ title, summary, href, large = false, imageSrc, imageAlt }: ProjectCardProps) {
  return (
    <Link href={href}>
      <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${large ? "h-full" : ""}`}>
        <div className={`${large ? "aspect-video" : "aspect-[16/9]"} bg-muted`}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? `${title} 프로젝트 이미지`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">프로젝트 이미지</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
        </div>
      </Card>
    </Link>
  )
}
