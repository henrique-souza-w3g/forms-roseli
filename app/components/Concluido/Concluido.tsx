
export default function Concluido() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center align-center vertical-middle bg-black/95">
      <div className="flex flex-col items-center justify-center w-[90%]">
        <h1 className="text-2xl font-bold">Muito Obrigado!</h1>
        <p className="font-medium">
          Seu formulário foi preenchido e enviado com sucesso
        </p>
      </div>
    </div>
  );
}
