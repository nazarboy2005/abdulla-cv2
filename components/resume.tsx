"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Award, Briefcase, BookOpen } from "lucide-react";

export function Resume() {
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

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/projects/Abdulla-Ahmed-Mustafawi-CV.pdf";
    link.download = "Abdulla_Ahmed_Mustafawi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 transition-smooth"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            My <span className="text-primary">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Education */}
          <div
            className={`transition-smooth duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="h-full p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-smooth hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h4 className="font-bold text-lg mb-1">
                    Bachelor of Business Administration
                  </h4>
                  <p className="text-primary font-semibold text-sm">
                    Logistics & Supply Chain Management
                  </p>
                  <p className="text-muted-foreground text-sm">
                    UDST – University Doha Science and Technology
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    2023 - Present
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Relevant Coursework
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Supply Chain Operations</li>
                    <li>• Logistics Management</li>
                    <li>• Business Analytics</li>
                    <li>• Strategic Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={`transition-smooth duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="h-full p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-smooth hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <h4 className="font-bold text-lg mb-1">
                    National Human Rights Committee
                  </h4>
                  <p className="text-primary font-semibold text-sm">
                    Internship
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Nov 2023 - March 2024
                  </p>
                  <ul className="text-xs text-muted-foreground mt-3 space-y-1">
                    <li>• Contributed to human rights advocacy initiatives</li>
                    <li>• Supported research and policy analysis</li>
                    <li>• Developed communication and organizational skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    National Service Training
                  </h4>
                  <p className="text-primary font-semibold text-sm">
                    National Service Program
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Sept 2023 - June 2024
                  </p>
                  <ul className="text-xs text-muted-foreground mt-3 space-y-1">
                    <li>• Developed professional and organizational skills</li>
                    <li>• Enhanced teamwork and leadership capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-smooth duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="h-full p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-smooth hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Skills</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Supply Chain Management", icon: "📦" },
                  { title: "Data Analysis", icon: "📊" },
                  { title: "Financial Literacy", icon: "💼" },
                  { title: "Communication", icon: "💬" },
                  { title: "Teamwork", icon: "👥" },
                  { title: "Time Management", icon: "⏱️" },
                  { title: "Microsoft Office", icon: "📋" },
                  { title: "Programming Basics", icon: "💻" },
                ].map((skill) => (
                  <div
                    key={skill.title}
                    className="p-3 bg-primary/10 rounded-lg border border-primary/30 hover:bg-primary/20 transition-smooth"
                  >
                    <p className="font-semibold text-sm">
                      {skill.icon} {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center">
          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-smooth hover:shadow-lg hover:-translate-y-1 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
}
