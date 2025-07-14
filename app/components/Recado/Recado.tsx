export default function Recado() {
  return (
    <div className="bg-[var(--foreground)] border-x-2 border-[var(--border)] ">
        <div className="p-4 flex flex-col justify-center align-center font-medium">
          <span className="font-bold text-lg px-3 text-[var(--bg-label)]">COLABORADOR,</span>
          <p className="text-lg mb-3 px-3 text-[var(--bg-label)]">É com satisfação que comunicamos que o Plano Odontológico Amil está disponível para sua adesão!</p>
          <h3 className="text-xl font-bold text-white text-center mt-3 py-2 bg-[var(--bg-title)] rounded-md ">POR QUE ADERIR?</h3>
          <ul className="flex flex-col mt-4 py-2 text-center md:grid md:grid-cols-3 gap-2">
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">✅<span className="font-bold">Cobertura Nacional:</span> <p>Atendimento com qualidade perto de você</p></li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">✅<span className="font-bold">Rede Credenciada:</span> <p>Mais de 5 mil opções de atendimento em SP</p></li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">✅<span className="font-bold">Totalmente Isendo de Carências:</span> <p>Já comece utilizando</p></li>
          </ul>
        </div>
        <div className="p-4 flex flex-col justify-center align-center font-medium">
          <h3 className="text-xl font-bold text-white text-center mt-3 py-2 bg-[var(--bg-title)] rounded-md ">REGRAS DE ACEITAÇÃO</h3>
          <p className="text-lg font-medium text-start mt-3 py-2 px-3 text-[var(--bg-label)] ">Segue a lista de dependentes direto aceitos:</p>
          <ul className="flex flex-col mt-4 py-2 text-center md:grid md:grid-cols-4 gap-2">
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">👨‍👩‍👧‍👦 PAIS</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">👨‍👩‍👧‍👦 IRMÃOS</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">👨‍👩‍👧‍👦 CÔNJUGE</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">👨‍👩‍👧‍👦 FILHOS</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">👨‍👩‍👧‍👦 SOBRINHOS</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">👨‍👩‍👧‍👦 NETOS</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">👨‍👩‍👧‍👦 TIOS</li>
          </ul>
          
        </div>
    </div>
  );
  
}
