"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { PersonalLife } from "@/components/personal-life"
import { Resume } from "@/components/resume"
import { Projects } from "@/components/projects"
import { Video } from "@/components/video"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-smooth">
      {/* Header with theme toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            Portfolio
          </h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="pt-20">
        <Navigation />
        <Hero />
        <About />
        <PersonalLife />
        <Resume />
        <Projects />
        <Video />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
