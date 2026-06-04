import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import heroImage from "../../assets/file.png";
import resume from "../../assets/Smriti_Singh_Resume.pdf";

export default function Hero() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const playRoleSound = () => {
      if (!audioRef.current) return;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    };

    return (
      <>

      <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 md:px-12 pt-24">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            className="pt-10 md:pt-0"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            {/* Greeting */}
            <p className="text-violet-400 text-xl md:text-2xl mb-4 font-semibold tracking-wide">
              Hello, I'm 👋
            </p>

            {/* Name */}
            <h1
              style={{ fontFamily: "'Times New Roman', serif" }}
              className="
                text-6xl
                md:text-8xl
                font-extrabold
                text-purple-200
                leading-tight
                tracking-wide
                drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]
                [text-shadow:2px_2px_0px_#a855f7,4px_4px_0px_#9333ea,6px_6px_0px_#7e22ce,8px_8px_12px_rgba(0,0,0,0.6)]
              "
            >
              Smriti Singh
            </h1>

            {/* Animated Role */}
            <div className="mt-5">
              <TypeAnimation
              sequence={[
                () => playRoleSound(),
                "AI Engineer",
                2000,
                () => playRoleSound(),
                "Software Developer",
                2000,
                () => playRoleSound(),
                "Machine Learning Enthusiast",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-2xl md:text-3xl text-violet-400 font-semibold"
              />
            </div>

            {/* Description */}
            <p className="mt-6 text-slate-300 text-lg leading-8 max-w-2xl">
              Artificial Intelligence Engineer specializing in Generative AI,
              Machine Learning, Computer Vision, and Backend Systems.
              Experienced in designing and deploying RAG applications,
              intelligent document processing platforms, real-time detection
              systems, and scalable API architectures. Proficient in FastAPI,
              LangChain, ChromaDB, Python, React, OpenCV, and modern AI
              frameworks, with a proven ability to transform complex business
              challenges into production-ready solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                View Projects
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-500 transition font-semibold"
              >
                View Resume
              </a>


            </div>

            {/* Social Links */}
            <div className="flex gap-8 mt-10 text-3xl">

              <a
                href="https://github.com/smriti-makane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-violet-400 hover:scale-110 transition duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/smriti-singh-567211305/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-violet-400 hover:scale-110 transition duration-300" />
              </a>

              <a href="mailto:smritisingh2003a@gmail.com">
                <FaEnvelope className="hover:text-violet-400 hover:scale-110 transition duration-300" />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-25 rounded-full"></div>

              <img
                src={heroImage}
                alt="Smriti Singh"
                className="
                  relative
                  w-[320px]
                  md:w-[420px]
                  rounded-3xl
                  border
                  border-purple-500/20
                  shadow-[0_0_60px_rgba(168,85,247,0.4)]
                  hover:scale-105
                  transition
                  duration-500
                "
              />

            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}