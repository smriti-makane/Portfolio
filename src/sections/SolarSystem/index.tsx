export default function SolarSystem() {
  return (
    <section
      id="solar-system"
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

      {/* Heading */}
      <div className="relative z-10 pt-20">

        <h1
          style={{ fontFamily: "Times New Roman, serif" }}
          className="
            text-center
            text-6xl
            font-bold
            text-white
          "
        >
          Explore My Universe
        </h1>

        <p
          style={{ fontFamily: "Times New Roman, serif" }}
          className="
            mt-6
            text-center
            text-slate-300
            text-xl
          "
        >
          Click on a planet to explore my journey
        </p>

      </div>
    </section>
  );
}