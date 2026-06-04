import profileImage from "../../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <div className="bg-slate-900/50 border border-purple-500/20 rounded-3xl p-10 backdrop-blur-sm">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Side Image */}
            <div className="flex justify-center">
              <div className="relative group">

                {/* Purple Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>

                {/* Border Frame */}
                <div className="relative p-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 rounded-3xl">

                  <img
                    src={profileImage}
                    alt="Smriti Singh"
                    className="
                      w-[350px]
                      h-[450px]
                      object-cover
                      object-top
                      rounded-3xl
                      brightness-105
                      contrast-110
                      shadow-[0_0_40px_rgba(168,85,247,0.4)]
                      hover:scale-105
                      transition
                      duration-500
                    "
                  />

                </div>

              </div>
            </div>

            {/* Right Side Content */}
            <div style={{ fontFamily: "'Times New Roman', serif" }}>

              <h2
                style={{ fontFamily: "'Times New Roman', serif" }}
                className="
                  text-7xl
                  font-bold
                  mb-8
                  text-purple-300
                  [text-shadow:3px_3px_0px_rgba(88,28,135,0.8),6px_6px_12px_rgba(0,0,0,0.5)]
                "
              >
                About Me
              </h2>

              <p className="text-slate-300 text-xl leading-10">
                I'm{" "}
                <span className="text-violet-400 font-bold">
                  Smriti Singh
                </span>
                , a Computer Science & Artificial Intelligence student
                passionate about building intelligent systems using
                Artificial Intelligence, Machine Learning, Computer Vision,
                and Backend Development.
              </p>

              <p className="text-slate-300 text-xl leading-10 mt-6">
                I have developed impactful projects including
                <span className="text-violet-400 font-bold">
                  {" "}ParkYourLot
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}Unique Minds Connect
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}CyberSense
                </span>, and AI-powered
                <span
                  className="
                    text-violet-400
                    font-bold
                    [text-shadow:0_0_8px_rgba(168,85,247,0.5)]
                  "
                >
                  {" "}RAG Chatbots
                </span>
                {" "}using LangChain and ChromaDB.
              </p>

              <p className="text-slate-300 text-xl leading-10 mt-6">
                My expertise spans
                <span className="text-violet-400 font-bold">
                  {" "}AI/ML
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}Backend Development
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}Java
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}Python
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}React
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}FastAPI
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}SQL
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}TensorFlow
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}OpenCV
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}LangChain
                </span>,
                <span className="text-violet-400 font-bold">
                  {" "}ChromaDB
                </span>,
                and modern software engineering practices.
              </p>

              {/* Skill Badges */}
              <div className="mt-10 flex flex-wrap gap-3">

                {[
                  "AI/ML",
                  "Computer Vision",
                  "React",
                  "FastAPI",
                  "Java",
                  "Python",
                  "LangChain",
                  "ChromaDB",
                  "SQL",
                  "TensorFlow",
                ].map((skill) => (
                  <span
                    key={skill}
                    style={{ fontFamily: "'Times New Roman', serif" }}
                    className="
                      bg-purple-500/20
                      text-purple-300
                      px-4
                      py-2
                      rounded-full
                      border
                      border-purple-500/20
                      hover:bg-purple-500/30
                      transition
                      text-lg
                      font-semibold
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}