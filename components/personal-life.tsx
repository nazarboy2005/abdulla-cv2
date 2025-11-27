"use client"

import { Heart, MapPin, Sun, Target, Activity, Waves, Camera } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function PersonalLife() {
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
    <section id="personal-life" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 transition-smooth bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Personal Life
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Childhood Section */}
        <div className="mb-20">
          <div
            className={`transition-smooth duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Childhood & Growing Up
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-3 text-foreground">
                    <div className="p-2 rounded-md bg-primary/10 border border-primary/20">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    Where I Grew Up
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I grew up in Qatar, a beautiful country in the Middle East. The rich culture, warm community, and
                    vibrant traditions shaped who I am today. Growing up in Qatar provided me with a unique perspective
                    on both traditional values and modern opportunities.
                  </p>
                </div>

                <div className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-3 text-foreground">
                    <div className="p-2 rounded-md bg-primary/10 border border-primary/20">
                      <Sun className="w-5 h-5 text-primary" />
                    </div>
                    Environment & Culture
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The environment I grew up in was filled with family values, respect for traditions, and a strong
                    sense of community. From wearing the traditional thob as a child to participating in cultural
                    activities, these experiences instilled in me a deep appreciation for my heritage and the importance
                    of staying connected to my roots.
                  </p>
                </div>

                <div className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-3 text-foreground">
                    <div className="p-2 rounded-md bg-primary/10 border border-primary/20">
                      <Camera className="w-5 h-5 text-primary" />
                    </div>
                    Childhood Interests
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    As a child, I was always curious and active. I loved exploring the outdoors, spending time with
                    family, and learning about the world around me. These early interests in exploration and discovery
                    laid the foundation for my passion for learning and continuous growth.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-lg overflow-hidden shadow-xl border border-border">
                    <img
                      src="/images/childhoodimage.png"
                      alt="Childhood photo wearing traditional thob"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Sports Section */}
        <div>
          <div
            className={`transition-smooth duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Hobbies & Sports
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Football Section */}
              <div className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">
                    Football
                  </h4>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Football is my best sport and one of my greatest passions. I played football throughout high school,
                  where I developed not just my skills on the field, but also learned valuable lessons about teamwork,
                  discipline, and perseverance. The sport taught me the importance of dedication and working together
                  toward a common goal.
                </p>
                <div className="mt-auto">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
                    <img
                      src="/meinfootball.png"
                      alt="Playing football in high school"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Horse Riding Section */}
              <div className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">
                    Horse Riding
                  </h4>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Riding horses at our farm is one of my favorite hobbies. It's a peaceful and exhilarating experience
                  that connects me with nature and tradition. Horse riding has taught me patience, respect for animals,
                  and the importance of building trust and understanding.
                </p>
                <div className="mt-auto">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
                    <img
                      src="/myimageinahorseasachild.png"
                      alt="Riding horses at the farm"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Beach Trips */}
              <div className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                    <Waves className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">Beach Trips</h4>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Every Friday during the summer, I love going to the beach. It's a cherished tradition that allows me to
                  relax, spend quality time with family and friends, and enjoy the beautiful Qatari coastline. These
                  regular beach trips are a perfect way to unwind and recharge after a busy week.
                </p>
                <div className="mt-auto">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border">
                    <img
                      src="/beachimage.png"
                      alt="Beach trips in Qatar"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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

