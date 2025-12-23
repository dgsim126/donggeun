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
    <Link href={href} className="group">
      <Card
        className={`overflow-hidden transition-all duration-200 cursor-pointer
        hover:-translate-y-1 hover:shadow-xl
        py-0 gap-0
        ${large ? "h-full" : ""}`}
      >
        <div className={`${large ? "aspect-video" : "aspect-[4/5]"} bg-muted overflow-hidden`}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? `${title} 프로젝트 이미지`}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">프로젝트 이미지</span>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
        </div>
      </Card>
    </Link>
  )
}
