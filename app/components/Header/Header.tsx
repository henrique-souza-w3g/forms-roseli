import Image from "next/image";

export default function Header() {
  return (
    <header className="p-8 mx-2 mb-4 bg-[var(--background)]/15 backdrop-blur-md flex flex-col justify-between alignt-middle shadow-xl rounded-b-lg h-auto md:flex-row">
      <Image
        src="/w3g_branco.png"
        alt="Logo W3G Branco"
        width={150}
        height={150}
      />
      <h1 className="text-[1.5em] font-bold align-middle">Formulário de Adesão</h1>
    </header>
  );
}
