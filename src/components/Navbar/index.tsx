export default function Navbar() {
  const leftLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  const rightLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const linkStyle = `
    relative
    text-white
    text-lg
    font-semibold
    transition-all
    duration-500

    hover:text-white
    hover:-translate-y-1
    hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]

    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-white
    after:via-[#E5E4E2]
    after:to-white
    after:transition-all
    after:duration-500
    after:-translate-x-1/2

    hover:after:w-full
  `;

  return (
    <>
      {/* LEFT NAVBAR */}
      <nav className="fixed top-6 left-8 z-50">
        <div
          className="
            bg-black/60
            backdrop-blur-xl
            border
            border-white/30
            rounded-2xl
            px-4
            py-2
            shadow-[0_0_35px_rgba(255,255,255,0.25)]
          "
        >
          <div className="flex items-center gap-8 whitespace-nowrap">
            {leftLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{ fontFamily: "Times New Roman, serif" }}
                className={linkStyle}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* RIGHT NAVBAR */}
      <nav className="fixed top-6 right-8 z-50">
        <div
          className="
            bg-black/60
            backdrop-blur-xl
            border
            border-white/30
            rounded-2xl
            px-4
            py-2
            shadow-[0_0_35px_rgba(255,255,255,0.25)]
          "
        >
          <div className="flex items-center gap-7 whitespace-nowrap">
            {rightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{ fontFamily: "Times New Roman, serif" }}
                className={linkStyle}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}