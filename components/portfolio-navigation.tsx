"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "overview", label: "서비스 설명" },
  { id: "role", label: "역할 및 기여" },
  { id: "tech", label: "기술" },
  { id: "challenges", label: "문제 및 해결" },
]

export function PortfolioNavigation() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    // ✅ 메인 Navigation과 동일한 스타일/높이/간격
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 h-12 sm:h-14">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-xs sm:text-sm font-medium transition-colors px-2 sm:px-3 py-1 rounded ${
                activeSection === section.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
