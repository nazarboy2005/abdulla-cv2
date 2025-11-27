"use client";

import { Download } from "lucide-react";

export function CVDownload() {
  const handleCVDownload = () => {
    const cvContent = `
ABDULLA AHMED MUSTAFAWI
Business Administration Student | Future Supply Chain Leader

CONTACT INFORMATION
Email: amustafawi05@gmail.com
Phone: +974 5588 2256
Address: Bldg. 15, Zone 45, Street 618, Old Airport, Doha, Qatar
Date of Birth: November 9, 2005
Nationality: Qatari

PROFESSIONAL SUMMARY
Ambitious and analytically-minded Business Administration student specializing in Logistics and Supply Chain Management. Completed National Service demonstrating leadership and discipline. Passionate about optimizing operations and implementing data-driven solutions in global supply chains.

EDUCATION
Bachelor of Business Administration - Logistics and Supply Chain Management
University of Doha Science and Technology (UDST)
September 2023 - Present

Secondary Education
Al Jazeera Academy
September 2017 - June 2023

EXPERIENCE & TRAINING
National Service
September 2023 - June 2024
- Developed leadership skills through structured military training
- Enhanced teamwork and communication in high-pressure environments
- Demonstrated discipline and time management capabilities

Volunteer - National Human Rights Committee
November 2023 - March 2024
- Assisted in community outreach and awareness programs
- Developed cultural sensitivity and communication skills

TECHNICAL SKILLS
- Microsoft Office Suite (Advanced Excel, PowerPoint, Word)
- Data Analysis Tools (Python basics, SQL fundamentals)
- Design Software (Canva, Basic Photoshop)
- Financial Literacy & Business Analysis
- Supply Chain Optimization

LANGUAGES
- Arabic (Native Speaker)
- English (Fluent - Professional Working Proficiency)

PROJECTS
- Logistics and Supply Chain Project (SCMA3020)
- Iced Arabic Coffee Marketing Plan (MRKT2010)
- Ooredoo: Price Gouging or Globally on Par? (ECON2015)
`;

    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Abdulla_Ahmed_Mustafawi_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleCVDownload}
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-semibold"
    >
      <Download className="w-5 h-5" />
      Download CV
    </button>
  );
}
