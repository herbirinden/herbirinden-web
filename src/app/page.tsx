import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",          // ekranın tamamını kapla
        display: "flex",             
        justifyContent: "center",    // yatayda ortala
        alignItems: "center",        // dikeyde ortala
        backgroundColor: "white",    // arka plan beyaz
      }}
    >
      <Image
        src="/logo.png"              // public klasöründe logo.png
        alt="Herbirinden"
        width={350}                  // istediğin boyuta göre ayarlayabilirsin
        height={600}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}