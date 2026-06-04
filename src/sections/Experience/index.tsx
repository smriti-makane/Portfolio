import { useState } from "react";

import astrapiaLogo from "../../assets/astrapia.png";
import sonyLogo from "../../assets/sony.png";
import drdoLogo from "../../assets/drdo.png";

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);

  const experiences = [
    {
      logo: astrapiaLogo,
      company: "Astrapia Technologies",
      role: "AI & Software Development Intern",
      description: [
        "Built an enterprise-grade AI-powered HR assistant using Retrieval-Augmented Generation (RAG). Developed scalable FastAPI services and integrated LangChain, Llama-3, ChromaDB, and SentenceTransformers for intelligent document retrieval and context-aware responses.",
        "Enhanced system performance through OCR integration, authentication mechanisms, and optimized retrieval pipelines, resulting in faster and more accurate information access.",
        "Worked across backend development, AI integration, vector databases, and API optimization to deliver production-ready AI solutions."
      ]
    },

    {
      logo: sonyLogo,
      company: "Sony India",
      role: "Artificial Intelligence Internship",
      description: [
        "Contributed to the testing and integration of Sony's premium HT-A3000 and HT-A5000 soundbar systems.",
        "Validated Dolby audio performance, software reliability, and system integration to ensure seamless user experience.",
        "Supported quality assurance processes and performance testing across multiple development stages while collaborating with engineering teams."
      ]
    },

    {
      logo: drdoLogo,
      company: "DRDO",
      role: "Research & Technology Exposure",
      description: [
        "Explored advanced Gallium Nitride (GaN) semiconductor technology for high-frequency power electronics.",
        "Conducted research on device architecture, thermal efficiency, switching performance, and future scalability.",
        "Gained exposure to defense-grade research methodologies, innovation practices, and next-generation electronic systems."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-950 text-white px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          style={{ fontFamily: "'Times New Roman', serif" }}
          className="
            text-7xl
            font-bold
            text-center
            mb-16
            text-purple-300
            [text-shadow:3px_3px_0px_rgba(88,28,135,0.8),6px_6px_12px_rgba(0,0,0,0.5)]
          "
        >
          Experience
        </h2>

        <div className="flex flex-col gap-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="
                cursor-pointer
                bg-slate-900
                border
                border-purple-500/20
                rounded-3xl
                p-8
                hover:border-purple-500
                hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]
                transition
                duration-300
              "
            >

              <div
                className="flex justify-between items-center gap-8"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >

                {/* Left Side */}
                <div className="flex-1">

                  <h3 className="text-4xl font-bold text-violet-400">
                    {exp.company}
                  </h3>

                  <p className="text-2xl text-purple-300 mt-3">
                    {exp.role}
                  </p>

                  <p className="mt-4 text-purple-400 text-lg italic">
                    Click to view internship details →
                  </p>

                </div>

                {/* Right Side Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="
                      w-40
                      h-40
                      rounded-full
                      object-contain
                      bg-white
                      p-2
                      border-4
                      border-purple-500
                      shadow-[0_0_35px_rgba(168,85,247,0.6)]
                    "
                  />
                </div>

              </div>

              {/* Expanded Description */}
              {active === index && (
                <div
                  className="mt-8 border-t border-purple-500/20 pt-6"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >

                  <h4 className="text-2xl font-semibold text-fuchsia-400 mb-4">
                    Internship Highlights
                  </h4>

                  <ul className="space-y-4 text-slate-300 text-xl leading-9">
                    {exp.description.map((item, i) => (
                      <li key={i}>
                        ✓ {item}
                      </li>
                    ))}
                  </ul>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}