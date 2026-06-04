import glbajajLogo from "../../assets/glbajaj.png";
import pusitLogo from "../../assets/pusit.png";
import BalbhavanLogo from "../../assets/Balbhavan.png";

export default function Education() {
  const education = [
    {
      logo: glbajajLogo,
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Artificial Intelligence",
      college: "GL Bajaj Institute Of Technology & Management",
      duration: "2023 - 2026",
      cgpa: "CGPA: 8.1 / 10",
    },
    {
      logo: pusitLogo,
      degree: "Diploma",
      specialization: "Electronics & Communication",
      college: "PUS Institute Of Technology",
      duration: "2019 - 2022",
      cgpa: "Percentage: 85%",
    },
    {
      logo: BalbhavanLogo,
      degree: "Secondary (Class X)",
      specialization: "",
      college: "Bal Bhavan Public School",
      duration: "2019 - 2020",
      cgpa: "Percentage: 75%",
    },
  ];

  return (
    <section
      id="education"
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
          Education
        </h2>

        <div className="flex flex-col gap-8">

          {education.map((edu, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border
                border-purple-500/20
                rounded-3xl
                p-10
                hover:border-purple-500
                hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]
                transition
                duration-300
              "
            >
              <div className="flex justify-between items-center gap-8">

                {/* Left Side Details */}
                <div
                  className="flex-1"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >

                  <h3 className="text-4xl font-bold text-violet-400">
                    {edu.degree}
                  </h3>

                  {edu.specialization && (
                    <p className="text-2xl text-purple-300 mt-3">
                      {edu.specialization}
                    </p>
                  )}

                  <p className="text-slate-300 mt-5 text-xl">
                    {edu.college}
                  </p>

                  <div className="flex gap-8 mt-5 text-slate-400 text-xl">
                    <span>{edu.duration}</span>
                    <span>{edu.cgpa}</span>
                  </div>

                </div>

                {/* Right Side Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.college}
                    className="
                      w-40
                      h-40
                      rounded-full
                      object-cover
                      bg-white
                      p-1
                      border-4
                      border-purple-500
                      shadow-[0_0_35px_rgba(168,85,247,0.6)]
                    "
                  />
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}