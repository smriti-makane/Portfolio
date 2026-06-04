import { useState } from "react";
import pythonCert from "../../assets/certificates/pythoncertificate.pdf";
import cyberCert from "../../assets/certificates/cybersecurity.pdf";
import hackathonCert from "../../assets/certificates/hackathon.pdf";
import bookCert from "../../assets/certificates/book.pdf";
import bestEmployeeCert from "../../assets/certificates/Bestemployee.pdf";

import { FaTrophy, FaBook, FaStar, FaRocket, FaCertificate, FaShieldAlt, FaPython } from "react-icons/fa";

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const achievements = [
    { icon: <FaTrophy />, title: "Top 5 - Hack'24", description: "Secured Top 5 position in Hack'24 at IIIT Delhi.", file: hackathonCert },
    { icon: <FaStar />, title: "Best Employee Award", description: "Recognized for outstanding performance and dedication.", file: bestEmployeeCert },
    { icon: <FaRocket />, title: "AI Project Excellence", description: "Developed impactful AI-powered solutions.", file: null },
  ];

  const certificates = [
    { icon: <FaShieldAlt />, title: "Cisco Cybersecurity", description: "Cisco Networking Academy Certification.", file: cyberCert },
    { icon: <FaPython />, title: "Python Programming", description: "Advanced Python Programming Certification.", file: pythonCert },
    { icon: <FaCertificate />, title: "Hackathon Certificate", description: "Hackathon Participation & Achievement.", file: hackathonCert },
    { icon: <FaBook />, title: "Published Author", description: "Research Publication Certificate.", file: bookCert },
  ];
  return (
    <section
      id="achievements"
      className="bg-slate-950 text-white px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          style={{ fontFamily: "Times New Roman, serif" }}
          className="
            text-7xl
            font-bold
            text-center
            mb-20
            text-purple-300
            [text-shadow:3px_3px_0px_rgba(88,28,135,0.8),6px_6px_12px_rgba(0,0,0,0.5)]
          "
        >
          Achievements & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Achievements */}
          <div
            className="
              bg-slate-900
              border
              border-purple-500/30
              rounded-3xl
              p-10
              shadow-[0_0_25px_rgba(168,85,247,0.2)]
            "
          >
            <h3
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-4xl text-purple-300 font-bold text-center mb-10"
            >
              🏆 Achievements
            </h3>

            {achievements.map((item, index) => (
              <div key={index}>
                <div className="flex gap-5 items-start">

                  <div className="text-4xl text-violet-400">
                    {item.icon}
                  </div>

                  <div>
                    <h4
                      onClick={() => item.file && setSelectedCertificate(item.file)}
                      style={{ fontFamily: "'Times New Roman', serif" }}
                      className="
                        text-2xl
                        text-white
                        font-semibold
                        cursor-pointer
                        hover:text-violet-400
                        transition
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{ fontFamily: "Times New Roman, serif" }}
                      className="text-slate-300 mt-2 text-lg"
                    >
                      {item.description}
                    </p>
                  </div>

                </div>

                {index !== achievements.length - 1 && (
                  <div className="border-b border-purple-500/30 my-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div
            className="
              bg-slate-900
              border
              border-purple-500/30
              rounded-3xl
              p-10
              shadow-[0_0_25px_rgba(168,85,247,0.2)]
            "
          >
            <h3
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-4xl text-purple-300 font-bold text-center mb-10"
            >
              📜 Certificates
            </h3>

            {certificates.map((item, index) => (
              <div key={index}>
                <div className="flex gap-5 items-start">

                  <div className="text-4xl text-violet-400">
                    {item.icon}
                  </div>

                  <div>
                    <h4
                      onClick={() => item.file && setSelectedCertificate(item.file)}
                      style={{ fontFamily: "Times New Roman, serif" }}
                      className="text-2xl text-white font-semibold cursor-pointer hover:text-violet-400 transition"
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{ fontFamily: "Times New Roman, serif" }}
                      className="text-slate-300 mt-2 text-lg"
                    >
                      {item.description}
                    </p>
                  </div>

                </div>

                {index !== certificates.length - 1 && (
                  <div className="border-b border-purple-500/30 my-8"></div>
                )}
              </div>
            ))}
          </div>

        </div>

        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

            <div className="bg-slate-900 border border-purple-500 rounded-3xl p-6 w-[90%] max-w-5xl">

              <h2
                style={{ fontFamily: "'Times New Roman', serif" }}
                className="text-3xl text-violet-400 font-bold text-center mb-6"
              >
                Certificate Preview
              </h2>

              <iframe
                src={selectedCertificate as string}
                title="Certificate Preview"
                className="w-full h-[75vh] rounded-2xl bg-white"
              />

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="
                    bg-gradient-to-r
                    from-purple-600
                    to-fuchsia-600
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        )}
      </div>
    </section>
  );
}