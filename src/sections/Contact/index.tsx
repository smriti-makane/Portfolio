import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white px-8 py-24"
    >
      <div
        className="max-w-4xl mx-auto text-center"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >

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
          Contacts
        </h2>

        <p className="text-slate-300 text-2xl mb-10">
          Let's connect and build something amazing together.
        </p>

        <div className="flex justify-center gap-10 text-4xl">

          <a
            href="https://github.com/smriti-makane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-violet-400 hover:scale-110 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/smriti-singh-567211305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-violet-400 hover:scale-110 transition" />
          </a>

          <a href="mailto:smritisingh2003a@gmail.com">
            <FaEnvelope className="hover:text-violet-400 hover:scale-110 transition" />
          </a>

        </div>

      </div>
    </section>
  );
}