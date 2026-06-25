import { FaJava, FaPython, FaReact } from "react-icons/fa";
import {
  SiTensorflow,
  SiMysql,
  SiFastapi,
  SiOpencv,
} from "react-icons/si";
import profileImage from "../../assets/profile.jpg";
import mercuryVideo from "../../assets/mercury.mp4";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "OpenCV", icon: <SiOpencv /> },
];

export default function About() {
  return (
    <section
    id="about"
    className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Mercury Background */}
<video
  autoPlay
  loop
  muted
  playsInline
  className="
    absolute
    inset-0
    w-[90%]
    h-[90%]
    object-cover
  "
>
  <source src={mercuryVideo} type="video/mp4" />
</video>

{/* Dark Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">

        {/* Mercury Card */}
        <div>
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* LEFT SIDE - Profile Image */}

<div className="flex justify-center">

  <div className="relative group">

    {/* Silver Glow */}

    <div
      className="
        absolute
        -inset-2
        rounded-[40px]
        bg-gradient-to-r
        from-gray-300
        via-white
        to-gray-400
        blur-xl
        opacity-30
        group-hover:opacity-60
        transition
        duration-500
      "
    />

    <img
      src={profileImage}
      alt="Smriti Singh"
      className="
        relative
        w-[360px]
        h-[470px]
        object-cover
        object-top
        rounded-[40px]
        border
        border-white/20
        shadow-[0_0_40px_rgba(255,255,255,0.2)]
      "
    />

  </div>

</div>
            {/* RIGHT SIDE */}
            <div style={{ fontFamily: "Times New Roman, serif" }}>

              <p className="text-gray-300 tracking-[8px] uppercase mb-2">
                ☿ Mercury
              </p>

              <h2
                className="
                  text-7xl
                  font-bold
                  mb-8
                  text-white
                "
              >
                About Me
              </h2>

              <p className="text-gray-300 text-xl leading-10">
                I'm{" "}
                <span className="text-white font-bold">
                  Smriti Singh
                </span>
                , a Computer Science & Artificial Intelligence student
                passionate about building intelligent systems using
                Artificial Intelligence, Machine Learning,
                Computer Vision, and Backend Development.
              </p>

              <p className="text-gray-300 text-xl leading-10 mt-6">
                I have developed impactful projects including
                <span className="text-white font-bold">
                  {" "}ParkYourLot
                </span>,
                <span className="text-white font-bold">
                  {" "}Unique Minds Connect
                </span>,
                <span className="text-white font-bold">
                  {" "}CyberSense
                </span>, and AI-powered
                <span className="text-white font-bold">
                  {" "}RAG Chatbots
                </span>
                using LangChain and ChromaDB.
              </p>

              <p className="text-gray-300 text-xl leading-10 mt-6">
                My expertise spans
                <span className="text-white font-bold">
                  {" "}AI/ML
                </span>,
                <span className="text-white font-bold">
                  {" "}Backend Development
                </span>,
                <span className="text-white font-bold">
                  {" "}Java
                </span>,
                <span className="text-white font-bold">
                  {" "}Python
                </span>,
                <span className="text-white font-bold">
                  {" "}React
                </span>,
                <span className="text-white font-bold">
                  {" "}FastAPI
                </span>,
                <span className="text-white font-bold">
                  {" "}SQL
                </span>,
                <span className="text-white font-bold">
                  {" "}TensorFlow
                </span>,
                <span className="text-white font-bold">
                  {" "}OpenCV
                </span>,
                <span className="text-white font-bold">
                  {" "}LangChain
                </span>,
                <span className="text-white font-bold">
                  {" "}ChromaDB
                </span>,
                and modern software engineering practices.
              </p>

              {/* Skills */}
              <div className="mt-10 flex flex-wrap gap-4">

                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      bg-white/10
                      border
                      border-white/15
                      text-white
                      hover:bg-white/20
                      transition
                    "
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>

                    <span className="font-semibold">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}