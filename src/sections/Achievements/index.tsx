import {
  FaTrophy,
  FaBook,
  FaStar,
  FaRocket,
  FaCertificate,
  FaShieldAlt,
  FaPython,
  FaBrain,
} from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Top 5 - Hack'24",
      description: "Secured Top 5 position in Hack'24 at IIIT Delhi.",
    },
    {
      icon: <FaBook />,
      title: "Published Author",
      description: "Research work published in Routledge Publication.",
    },
    {
      icon: <FaStar />,
      title: "Best Employee Award",
      description: "Recognized for outstanding performance and dedication.",
    },
    {
      icon: <FaRocket />,
      title: "AI Project Excellence",
      description: "Developed impactful AI-powered solutions.",
    },
  ];

  const certificates = [
    {
      icon: <FaShieldAlt />,
      title: "Cisco Cybersecurity",
      description: "Cisco Networking Academy Certification.",
    },
    {
      icon: <FaPython />,
      title: "Python Programming",
      description: "Advanced Python Programming Certification.",
    },
    {
      icon: <FaBrain />,
      title: "Artificial Intelligence",
      description: "AI & Machine Learning Certification.",
    },
    {
      icon: <FaCertificate />,
      title: "Machine Learning",
      description: "ML Specialization & Practical Applications.",
    },
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
                      style={{ fontFamily: "Times New Roman, serif" }}
                      className="text-2xl text-white font-semibold"
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
                      style={{ fontFamily: "Times New Roman, serif" }}
                      className="text-2xl text-white font-semibold"
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

      </div>
    </section>
  );
}