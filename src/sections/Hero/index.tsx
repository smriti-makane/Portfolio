import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import resume from "../../assets/Smriti_Singh_Resume.pdf";
import moonVideo from "../../assets/moon.mp4";

export default function Hero() {
  // stats removed (unused)

  return (
    <section
    id="home"
    className="relative h-screen text-white overflow-hidden"
    >
      <video
  autoPlay
  loop
  muted
  playsInline
  className="
  absolute
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  -rotate-90
  w-[90vh]
  h-auto
  object-contain
"
>
  <source src={moonVideo} type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/40"></div>
      {/* Dark Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full px-4">
        {/* Greeting */}
        <p
  style={{ fontFamily: "Times New Roman, serif" }}
  className="
    text-3xl
    text-white
    mb-6
    text-center
  "
>
  Hey! I'm 💫
</p>

        {/* Name */}
        <h1
          style={{ fontFamily: "Times New Roman, serif" }}
          className="text-7xl md:text-9xl font-bold leading-none mb-8"
        >
          <span className="text-white">Smriti </span>
          <span className="text-[white]">Singh</span>
        </h1>

       {/* Roles */}
<div
  style={{ fontFamily: "Times New Roman, serif" }}
  className="
    flex
    flex-wrap
    justify-center
    gap-8
    text-2xl
    md:text-3xl
    font-semibold
    text-dustyrose-300
    mb-10
  "
>
  <span>• AI Engineer</span>
  <span>• ML Enthusiast</span>
  <span>• Backend Developer</span>
</div>

        {/* Description */}
        <p
          style={{ fontFamily: "Times New Roman, serif" }}
          className="text-xl text-slate-200 leading-10 max-w-4xl mb-10"
        >
          Building intelligent systems using Generative AI,
          Machine Learning, Computer Vision, and scalable
          backend architectures that solve real-world problems.
        </p>

        {/* Resume + Social */}
        <div className="flex items-center gap-8 flex-wrap justify-center">

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-[#D4A85C] text-white text-lg font-semibold hover:bg-[#D4A85C]/10 transition"
          >
            View Resume
          </a>

          <div className="flex gap-5">

            <a
              href="https://github.com/smriti-makane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-[#D4A85C] flex items-center justify-center text-xl hover:bg-[#D4A85C]/10 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/smriti-singh-567211305/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-[#D4A85C] flex items-center justify-center text-xl hover:bg-[#D4A85C]/10 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:smritisingh2003a@gmail.com"
              className="w-14 h-14 rounded-full border border-[#D4A85C] flex items-center justify-center text-xl hover:bg-[#D4A85C]/10 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}