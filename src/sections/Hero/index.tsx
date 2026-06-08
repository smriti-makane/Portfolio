import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import resume from "../../assets/Smriti_Singh_Resume.pdf";
import moonVideo from "../../assets/moon.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen text-white overflow-hidden"
    >
      {/* Background Video */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">

        {/* Greeting */}
        <p
          style={{ fontFamily: "Times New Roman, serif" }}
          className="text-3xl text-white mb-6"
        >
          Hey! I'm 💫
        </p>

        {/* Name */}
        <h1
          style={{ fontFamily: "Times New Roman, serif" }}
          className="
            text-7xl
            md:text-9xl
            font-bold
            leading-none
            mb-8
          "
        >
          <span className="text-white">
            Smriti{" "}
          </span>

          <span className="text-white">
            Singh
          </span>
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
            text-[white]
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
          className="
            text-xl
            text-white
            leading-10
            max-w-4xl
            mb-10
            drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]
          "
        >
          Building intelligent systems using Generative AI,
          Machine Learning, Computer Vision, and scalable
          backend architectures that solve real-world problems.
        </p>

        {/* Resume + Social */}
        <div className="flex items-center gap-8 flex-wrap justify-center">

          {/* Resume */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-10
              py-4
              rounded-full
              border
              border-white/80
              text-white
              text-lg
              font-semibold

              shadow-[0_0_20px_rgba(255,255,255,0.25),0_0_40px_rgba(255,255,255,0.12)]

              hover:shadow-[0_0_35px_rgba(255,255,255,0.7),0_0_60px_rgba(255,255,255,0.25)]
              hover:scale-105

              transition-all
              duration-300
            "
          >
            View Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-5">

            <a
              href="https://github.com/smriti-makane"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14
                h-14
                rounded-full
                border
                border-white/80
                flex
                items-center
                justify-center
                text-xl
                text-white

                shadow-[0_0_15px_rgba(255,255,255,0.25)]

                hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]
                hover:scale-110
                
                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/smriti-singh-567211305/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14
                h-14
                rounded-full
                border
                border-white/80
                flex
                items-center
                justify-center
                text-xl
                text-white

                shadow-[0_0_15px_rgba(255,255,255,0.25)]

                hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]
                hover:scale-110

                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:smritisingh2003a@gmail.com"
              className="
                w-14
                h-14
                rounded-full
                border
                border-white/80
                flex
                items-center
                justify-center
                text-xl
                text-white

                shadow-[0_0_15px_rgba(255,255,255,0.25)]

                hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]
                hover:scale-110

                transition-all
                duration-300
              "
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}