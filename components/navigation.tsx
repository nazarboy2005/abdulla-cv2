"use client"

import { useState } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  const sections = [
    { id: "about", label: "About" },
    { id: "personal-life", label: "Personal Life" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "video", label: "Video" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-4 text-sm font-medium transition-smooth whitespace-nowrap border-b-2 ${
                activeSection === section.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
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
