"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "service", label: "서비스 설명" },
  { id: "overview", label: "프로젝트 개요" },
  { id: "flow", label: "동작 흐름" },
  { id: "tech", label: "사용 기술" },
]

export function UiPathNavigation() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const handleScroll = () => {
      // ✅ 네비 높이만큼 오프셋(너희 공통 nav와 동일: h-12 / sm:h-14)
      const offset = window.innerWidth >= 640 ? 120 : 110
      const scrollPosition = window.scrollY + offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    // ✅ scrollIntoView는 상단 네비에 가려질 수 있어서, offset 스크롤로 처리
    const y = el.getBoundingClientRect().top + window.scrollY
    const navH = window.innerWidth >= 640 ? 56 : 48 // sm:h-14 / 기본 h-12
    window.scrollTo({ top: y - navH - 18, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 h-12 sm:h-14">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`text-xs sm:text-sm font-medium transition-colors px-2 sm:px-3 py-1 rounded ${
                activeSection === s.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
