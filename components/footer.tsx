"use client"

export function Footer() {
  const currentYear = 2025

  return (
    <footer className="border-t border-border bg-card/30 py-12 px-4 sm:px-6 lg:px-8 transition-smooth">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">E-Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Showcasing my journey in Logistics & Supply Chain Management and professional achievements.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-primary transition-smooth">
                  Resume
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-smooth">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} My E-Portfolio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
