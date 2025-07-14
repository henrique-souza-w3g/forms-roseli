import Image from "next/image";

export default function Header() {
  return (
    <header className="p-8 mx-2 mb-4 bg-[var(--background)]/30 backdrop-blur-md flex flex-col justify-between alignt-middle shadow-xl rounded-b-lg h-auto md:flex-row">
      <div className="flex items-center justify-center gap-4 mb-4 md:mb-0">
        <Image
        src="/w3g_branco.png"
        alt="Logo W3G Branco"
        width={150}
        height={150}
      />
      <div className="w-1 h-10 bg-white rounded-full"></div>
      <Image src="/agro_reserva.jpg"
      alt="Logo Amil"
      width={200}
      height={100}
      className="" />
      </div>
      <h1 className="text-[1.5em] font-bold align-middle">Formulário de Adesão</h1>
    </header>
  );
}
