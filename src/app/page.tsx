export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Başlık */}
      <h1>Herbirinden.com</h1>

      {/* Logo */}
      <img 
        src="/logo.png" 
        alt="Herbirinden Logo" 
        width="300" 
        style={{ marginTop: "20px" }}
      />

      {/* Alt yazı */}
      <p style={{ marginTop: "20px", fontSize: "20px" }}>
        Çok yakında hem web’de, hem de mobil’deyiz 🚀
      </p>
    </main>
  );
}