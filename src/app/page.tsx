import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-white">
      <Image
        src="/logo.png"
        alt="Herbirinden"
        width={350}
        height={600}
        style={{ objectFit: "contain" }}
        priority
      />
    </main>
  );
}