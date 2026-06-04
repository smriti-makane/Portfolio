import ssLogo from "../../assets/ss.png";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-slate-950/60
        border-b
        border-purple-500/20
        shadow-[0_8px_30px_rgba(168,85,247,0.15)]
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">

          <img
            src={ssLogo}
            alt="SS Logo"
            className="
              w-12
              h-12
              rounded-full
              object-cover
              shadow-[0_0_20px_rgba(168,85,247,0.6)]
              hover:scale-110
              transition
              duration-300
            "
          />

        </div>

        {/* Navigation */}
        <div className="flex gap-3 md:gap-5">

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
                text-lg
                font-semibold
                border
                border-transparent
                transition-all
                duration-300

                hover:text-purple-300
                hover:bg-purple-500/10
                hover:border-purple-500/40
                hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]

                after:content-['']
                after:absolute
                after:left-1/2
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-purple-400
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
      </div>
    </nav>
  );
}