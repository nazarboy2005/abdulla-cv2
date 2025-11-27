"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-smooth">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div
            className={`transition-smooth duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
                Logistics & Supply Chain Management
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-foreground">
              Welcome to My
              <br />
              <span className="text-primary">E-Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Showcasing my passion for Logistics & Supply Chain Management with innovative projects and practical
              expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth hover:shadow-lg"
              >
                Explore My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted hover:border-primary/50 transition-smooth"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div
            className={`flex justify-center transition-smooth duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-01%20at%2011.17.37_615edd53-in0LZRJNW3quMUS6LXipD9LSQM7xei.jpg"
                  alt="Abdulla Ahmed Mustafawi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
