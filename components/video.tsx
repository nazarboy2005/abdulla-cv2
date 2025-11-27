"use client";

import { useEffect, useRef, useState } from "react";

export function Video() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="video"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 transition-smooth"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Presentation</span>
        </h2>

        <div
          className={`transition-smooth duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary transition-smooth">
              {/* Video placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center cursor-pointer hover:from-primary/30 hover:to-accent/30 transition-smooth relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-pulse" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/40 transition-smooth group-hover:scale-110 shadow-lg group-hover:shadow-primary/50">
                    <svg
                      className="w-10 h-10 text-primary fill-current ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground font-semibold">
                    Click to view presentation
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Coming Soon
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-card to-card/50">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  Project Presentation & Overview
                </h3>
                <p className="text-muted-foreground mb-6">
                  Share your professional journey, key achievements, and
                  insights into your major projects. This section highlights
                  your communication skills and project expertise.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">
                    Ready to Share:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "✓ Project Overview",
                      "✓ Key Challenges",
                      "✓ Solutions Implemented",
                      "✓ Results & Impact",
                      "✓ Lessons Learned",
                      "✓ Future Vision",
                    ].map((topic, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
