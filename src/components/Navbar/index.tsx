
export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];
  

  return (
    <>
     

      {/* Oval Navbar */}
      <nav className="fixed top-6 left-[68%] -translate-x-1/2 z-50">
        <div
        className="
        flex
        items-center
        gap-2
        px-10
        py-4
        rounded-full
        border
        border-white/20
        bg-black/50
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(255,255,255,0.12)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ fontFamily: "Times New Roman, serif" }}
              className="
                relative
                px-4
                py-2
                rounded-full
                text-white
                text-base
                font-medium
                transition-all
                duration-300

                hover:text-white-300
                hover:bg-white-500/10

                after:content-['']
                after:absolute
                after:left-1/2
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-white-400
                after:transition-all
                after:duration-300
                after:-translate-x-1/2

                hover:after:w-3/4
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
} 