"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Instagram, Phone, Send } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 transition-smooth bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            className={`transition-smooth duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground text-sm">amustafawi05@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground text-sm">+974 5588 2256</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary transition-smooth hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <a
                      href="https://instagram.com/ib260am"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-smooth"
                    >
                      @ib260am
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-smooth duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none transition-smooth hover:border-muted-foreground"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none transition-smooth hover:border-muted-foreground"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none transition-smooth hover:border-muted-foreground resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-smooth hover:shadow-lg hover:-translate-y-1"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
