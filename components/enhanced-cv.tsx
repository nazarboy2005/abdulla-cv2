"use client";

import {
  Download,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Globe,
  Award,
  BookOpen,
  Code,
  Briefcase,
} from "lucide-react";

export function EnhancedCV() {
  const handleDownload = () => {
    // Create a more detailed CV download
    alert("CV download feature coming soon!");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 shadow-2xl rounded-lg">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Abdulla Ahmed Mustafawi
        </h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">
          Business Administration Student | Future Supply Chain Leader
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>
                Bldg. 15, Zone 45, Street 618, Old Airport, Doha, Qatar
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+974 5588 2256</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>amustafawi05@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Born: November 9, 2005 | Qatari National</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600" />
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ambitious and analytically-minded Business Administration student
          specializing in Logistics and Supply Chain Management. Completed
          National Service demonstrating leadership and discipline. Passionate
          about optimizing operations and implementing data-driven solutions in
          global supply chains. Strong foundation in business strategy,
          financial analysis, and emerging technologies in logistics.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          Education
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-lg">
              Bachelor of Business Administration
            </h3>
            <p className="text-blue-600 font-medium">
              Logistics and Supply Chain Management Major
            </p>
            <p className="text-gray-600">
              University of Doha Science and Technology (UDST)
            </p>
            <p className="text-sm text-gray-500">
              September 2023 - Present | Current GPA: [Your GPA]
            </p>
            <p className="text-sm mt-2">
              Relevant Coursework: Supply Chain Analytics, Operations
              Management, International Business, Data Analysis
            </p>
          </div>
          <div className="border-l-4 border-gray-400 pl-4">
            <h3 className="font-semibold">Secondary Education</h3>
            <p className="text-gray-600">Al Jazeera Academy</p>
            <p className="text-sm text-gray-500">September 2017 - June 2023</p>
            <p className="text-sm mt-1">
              Graduated with distinction in Mathematics and Business Studies
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Training */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-600" />
          Experience & Training
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-lg">National Service</h3>
            <p className="text-green-600 font-medium">
              September 2023 - June 2024
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>
                • Developed leadership skills through structured military
                training
              </li>
              <li>
                • Enhanced teamwork and communication in high-pressure
                environments
              </li>
              <li>
                • Demonstrated discipline and time management capabilities
              </li>
              <li>
                • Completed specialized logistics and coordination modules
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg">
              Volunteer - National Human Rights Committee
            </h3>
            <p className="text-blue-600 font-medium">
              November 2023 - March 2024
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Assisted in community outreach and awareness programs</li>
              <li>• Developed cultural sensitivity and communication skills</li>
              <li>• Contributed to social impact initiatives in Qatar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-blue-600" />
          Technical Skills & Tools
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Software & Applications
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Microsoft Office Suite (Advanced Excel, PowerPoint, Word)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Data Analysis Tools (Python basics, SQL fundamentals)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Design Software (Canva, Basic Photoshop)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Project Management Tools
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Core Competencies</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Financial Literacy & Business Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Supply Chain Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Strategic Planning & Problem Solving
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Cross-cultural Communication
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages & Personal Interests */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              Languages
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Arabic:</strong> Native Speaker
              </li>
              <li>
                <strong>English:</strong> Fluent (Professional Working
                Proficiency)
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Personal Interests
            </h2>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Technology trends in logistics and automation</li>
              <li>• Financial markets and investment strategies</li>
              <li>• Sustainable business practices</li>
              <li>• Cultural exchange and community service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Button */}
      <div className="text-center pt-6 border-t">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          <Download className="w-5 h-5" />
          Download PDF Version
        </button>
      </div>
    </div>
  );
}
