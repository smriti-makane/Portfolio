import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMysql,
  SiTensorflow,
  SiOpencv,
  SiFastapi,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiCss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Languages",
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "AI / ML",
      items: [
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "YOLO", icon: "🎯" },
        { name: "LangChain", icon: "🔗" },
        { name: "ChromaDB", icon: "🧠" },
        { name: "SentenceTransformers", icon: "🤖" },
        { name: "RAG", icon: "📚" },
        { name: "Vector Embeddings", icon: "📊" },
        { name: "Ollama", icon: "🦙" },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "DeepFace", icon: "👁️" },
      ],
    },

    {
      title: "Backend & APIs",
      items: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "REST APIs", icon: "⚡" },
      ],
    },

    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },

    {
      title: "Database",
      items: [
        { name: "SQL", icon: <SiMysql /> },
        { name: "DBMS", icon: "🗄️" },
      ],
    },

    {
      title: "Core CS",
      items: [
        { name: "DSA", icon: "📐" },
        { name: "OOPs", icon: "🏗️" },
        { name: "DBMS", icon: "🗄️" },
        { name: "Operating Systems", icon: "💻" },
      ],
    },

    {
      title: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: "💻" },
      ],
    },

    {
      title: "Soft Skills",
      items: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Communication", icon: "💬" },
        { name: "Rapid Tech Adaptation", icon: "🚀" },
        { name: "Team Collaboration", icon: "🤝" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white px-8 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          style={{ fontFamily: "'Times New Roman', serif" }}
          className="
            text-7xl
            font-bold
            text-center
            mb-12
            text-purple-300
            [text-shadow:3px_3px_0px_rgba(88,28,135,0.8),6px_6px_12px_rgba(0,0,0,0.5)]
          "
        >
          Technical Skills
        </h2>

        <div className="flex flex-col gap-5">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                bg-slate-900
                border
                border-purple-500/20
                rounded-2xl
                p-5
                hover:border-purple-500
                hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]
                transition
              "
            >
              <div className="flex flex-col md:flex-row gap-4">

                {/* Category Title */}
                <h3
                  style={{ fontFamily: "'Times New Roman', serif" }}
                  className="
                    text-xl
                    font-bold
                    text-violet-400
                    min-w-[170px]
                  "
                >
                  {skill.title}:
                </h3>

                {/* Skill Cards */}
                <div className="flex flex-wrap gap-2">

                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      style={{ fontFamily: "'Times New Roman', serif" }}
                      className="
                        flex
                        items-center
                        gap-2
                        bg-slate-800/70
                        px-3
                        py-1.5
                        rounded-lg
                        text-slate-200
                        text-base
                        border
                        border-slate-700
                        hover:border-purple-500/40
                        transition
                      "
                    >
                      <span className="text-base">
                        {item.icon}
                      </span>

                      <span>{item.name}</span>
                    </div>
                  ))}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}