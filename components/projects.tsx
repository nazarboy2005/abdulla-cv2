"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Download,
  Eye,
  FileText,
  BarChart3,
  Search,
} from "lucide-react";

export function Projects() {
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

  const projects = [
    {
      title: "Principles of Logistics & Supply Chain",
      course: "SCMA3020",
      description:
        "Comprehensive analysis and strategic planning for logistics operations, including supply chain optimization, inventory management, and operational efficiency improvements. This project evaluated real-world supply chain challenges and proposed data-driven solutions.",
      tags: ["Supply Chain", "Operations", "Strategy"],
      type: "Presentation",
      image: "/images/logisticsprojectimage.png",
      icon: FileText,
      downloadUrl: "/projects/Principles-of-Logistics.pptx",
    },
    {
      title: "Iced Arabic Coffee Marketing Plan",
      course: "MRKT2010",
      description:
        "Complete marketing strategy and business plan for an iced Arabic coffee product, including comprehensive market analysis, financial projections, and promotional strategies. Developed competitive positioning and go-to-market strategy.",
      tags: ["Marketing", "Business", "Analysis"],
      type: "Presentation",
      image: "/images/cofeeproject.png",
      icon: BarChart3,
      downloadUrl: "/projects/MRKT1001PresentationFinalPPT.pptx",
    },
    {
      title: "Ooredoo: Price Gouging or Globally on Par?",
      course: "ECON2015",
      description:
        "In-depth analysis of Ooredoo's pricing strategies, comparing global pricing standards with regional market strategies and examining competitive positioning in the telecommunications sector. Researched market dynamics and pricing models.",
      tags: ["Pricing Strategy", "Market Analysis", "Telecommunications"],
      type: "Research",
      image: "/images/ooredooprojectimage.png",
      icon: Search,
      downloadUrl: "/projects/MRKT1001PresentationFinalPPT.pptx",
      viewUrl:
        "https://www.canva.com/design/DAGieDLyhRk/Mvdb7pjw3YQ1g8sHdUCE7Q/view?utm_content=DAGieDLyhRk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfda8537264",
    },
  ];

  const handleDownload = (url: string, filename: string) => {
    try {
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again or contact for assistance.");
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 transition-smooth bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Project <span className="text-primary">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className={`transition-smooth duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group h-full flex flex-col bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-xl transition-smooth overflow-hidden relative">
                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-muted/50">
                    {project.image !== "/placeholder.svg" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-smooth duration-500"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-primary/60" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-3">
                      {project.viewUrl && (
                        <a
                          href={project.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.downloadUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(
                              project.downloadUrl!,
                              `${project.title}.${project.downloadUrl
                                .split(".")
                                .pop()}`
                            );
                          }}
                          className="p-3 bg-background text-foreground rounded-lg hover:bg-muted transition-smooth"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-col gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-semibold border border-primary/20">
                          {project.type}
                        </span>
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                          {project.course}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4 text-sm">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.viewUrl && (
                        <a
                          href={project.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-smooth flex items-center justify-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </a>
                      )}
                      {project.downloadUrl && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(
                              project.downloadUrl!,
                              `${project.title}.pdf`
                            );
                          }}
                          className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-semibold hover:bg-muted hover:border-primary/50 transition-smooth flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
