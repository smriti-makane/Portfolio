export default function Achievements() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "white",
        padding: "100px",
      }}
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
        Achievements
      </h2>

      <ul
        style={{
          fontFamily: "'Times New Roman', serif",
          lineHeight: "2.2",
          fontSize: "1.5rem",
        }}
        className="text-slate-300"
      >
        <li>🏆 Top 5 in Hack'24 at IIIT Delhi</li>
        <li>🏆 Best Employee Award</li>
        <li>📚 Published Author in Routledge Publication</li>
        <li>🎓 Cisco Cybersecurity Certification</li>
      </ul>
    </section>
  );
}