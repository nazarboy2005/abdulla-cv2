"use client"

import { Mail, Instagram, MapPin, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 transition-smooth">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left side - Profile picture */}
          <div
            className={`flex justify-center md:col-span-1 transition-smooth duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative w-64 h-64 flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-01%20at%2011.17.37_615edd53-in0LZRJNW3quMUS6LXipD9LSQM7xei.jpg"
                alt="Abdulla Ahmed Mustafawi"
                className="relative w-full h-full object-cover rounded-2xl shadow-xl ring-4 ring-background hover:shadow-primary/40 transition-smooth duration-300"
              />
            </div>
          </div>

          {/* Right side - Info */}
          <div className="md:col-span-2">
            <div
              className={`transition-smooth duration-1000 space-y-6 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Abdulla Ahmed Mustafawi, a dedicated student at UDST pursuing a Bachelor of Business
                  Administration in Logistics and Supply Chain Management. Passionate about optimizing supply chain
                  operations, I combine analytical thinking with practical problem-solving to drive organizational
                  excellence and efficiency.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Interests & Focus
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>📦 Supply Chain Optimization</li>
                  <li>📊 Data Analysis & Business Intelligence</li>
                  <li>🎯 Operations Management</li>
                  <li>💼 Strategic Planning</li>
                  <li>🌍 Global Logistics Solutions</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:amustafawi05@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      amustafawi05@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-primary" />
                    <a
                      href="https://instagram.com/ib260am"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      @ib260am
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "2+", label: "Years of Study" },
                  { number: "6", label: "Major Projects" },
                  { number: "7", label: "Key Skills" },
                  { number: "100%", label: "Dedication" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-smooth hover:shadow-lg group"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h4 className="font-bold mb-4">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Supply Chain",
                    "Data Analysis",
                    "Financial Literacy",
                    "Communication",
                    "Teamwork",
                    "Time Management",
                    "Microsoft Office",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-smooth cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accomplishments & Volunteering */}
              <div className="p-6 bg-card rounded-xl border border-border">
                <h4 className="font-bold mb-4">Accomplishments & Volunteering</h4>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <p className="font-semibold text-primary mb-2">National Service Training</p>
                    <p className="text-sm text-muted-foreground">
                      Completed professional development program focusing on leadership, teamwork, and organizational
                      skills.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">National Human Rights Committee</p>
                    <p className="text-sm text-muted-foreground">
                      Contributed to human rights advocacy and policy research initiatives, developing insights into
                      organizational management and social responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
