export default function Recado() {
  return (
    <div className="bg-[var(--foreground)] border-x-2 border-[var(--border)] ">
        <div className="p-4 flex flex-col justify-center align-center font-medium">
          <span className="font-bold text-lg px-3 text-[var(--bg-label)]">COLABORADOR,</span>
          <p className="text-lg mb-3 px-3 text-[var(--bg-label)]">Buscamos um novo benefício muito mais completo e você agora pode aderir ao plano de saúde <span className="font-bold">Amil!</span></p>
          <h3 className="text-xl font-bold text-white text-center mt-3 py-2 bg-[var(--bg-title)] rounded-md ">POR QUE ADERIR?</h3>
          <ul className="flex flex-col mt-4 py-2 text-center md:grid md:grid-cols-2 gap-2">
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">✅<span className="font-bold">Cobertura completa:</span> <p>Internação, Pronto Socorro, Cirurgias, Exames, Consultas e Telemedicina</p></li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">✅<span className="font-bold">Atendimento Nacional</span> <p>Muitas opções em todo Brasil</p></li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">✅<span className="font-bold">Totalmente Isendo de Carências:</span> <p>Já comece utilizando</p></li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-1">✅<span className="font-bold">Bem-Estar em Primeiro Lugar:</span> <p>Mais tranquilidade e cuidado com a sua saúde e da sua família</p></li>
          </ul>
        </div>
        <div className="p-4 flex flex-col justify-center align-center font-medium">
          <h3 className="text-xl font-bold text-white text-center mt-3 py-2 bg-[var(--bg-title)] rounded-md ">REGRAS DE ACEITAÇÃO</h3>
          <p className="text-lg font-medium text-start mt-3 py-2 px-3 text-[var(--bg-label)] ">Contribuição Mensal de 15% do valor do plano para você colaborador e seus dependentes (R$ 35 por pessoa)</p>
        </div>
        <div className="p-4 flex flex-col justify-center align-center font-medium">
          <h3 className="text-xl font-bold text-white text-center mt-3 py-2 bg-[var(--bg-title)] rounded-md">SOBRE O PLANO</h3>
          <ul className="flex flex-col mt-4 py-2 text-center gap-2">
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">Prata - Enfermaria + Coparticipação</li>
          </ul>
          <h3 className="text-lg font-bold text-white text-center mt-3 py-2 bg-[var(--bg-title)] rounded-md">LIMITADORES DE COPARTICIPAÇÃO</h3>
            <ul className="flex flex-col mt-4 py-2 text-center md:grid md:grid-cols-3 gap-2">
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Consultas Eletivas R$ 30</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Consultas PS R$ 90</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Exames Básicos R$ 25</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Exames Especiais R$ 110</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Terapias Simples R$ 60</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Terapias Especiais R$ 150</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Procedimentos Simples R$ 60</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Procedimentos Especiais R$ 150</li>
              <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">📃 Internação R$ 220</li>
            </ul>          
        </div>
        <div className="p-4 flex flex-col justify-center align-center font-medium">
          <h3 className="text-xl font-bold text-white text-center mt-3 py-2 bg-[var(--bg-title)] rounded-md">PRINCIPAIS HOSPITAIS</h3>
          <ul className="flex flex-col mt-4 py-2 text-center md:grid md:grid-cols-2 gap-2">
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">🏥 Hospital Santa Helena - Unai/MG</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">🏥 Casa de Saúde e Maternidade Santa Monica - Unai/MG</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">🏥 Laboratório Dias - Unai/MG</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">🏥 Laboratório São Luiz - Unai/MG</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">🏥 Instituto São Vicente de Paulo Hospital Luciano Chaves - Formosa/GO</li>
            <li className="bg-[var(--bg-title)] text-white border-2 border-[var(--border)] rounded-md mx-2 p-2">🏥 Laboratório Sabin - Formosa/GO</li>
          </ul>
        </div>
    </div>
  );
}
