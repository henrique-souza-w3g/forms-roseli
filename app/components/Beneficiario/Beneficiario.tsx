import { useEffect, useState } from "react";
import Recado from "../Recado/Recado";
import { formatCelular, formatCEP, formatCPF, formatData } from "../Format/Format";

interface BeneficiarioProps {
  dependente?: boolean
  setInputsBeneficiario: (inputs:any) => void;
  children: React.ReactNode
}

export default function Beneficiario({dependente, setInputsBeneficiario, children}: BeneficiarioProps) {
  const empresa = "Agro Reserva";
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [nomeMae, setNomeMae] = useState('')
  const [estadoCivil, setEstadoCivil] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')
  const plano = "Prata - Enfermaria: Coparticipação com Limitadores: R$ 233,32";
  const [parentesco, setParentesco] = useState('')


  useEffect(() => {
    setInputsBeneficiario({
      empresa, nome, cpf, dataNascimento, nomeMae, estadoCivil, email, celular, endereco, numero,
      bairro, cidade, estado, cep, plano, parentesco
    })
  }, [ empresa, nome, cpf, dataNascimento, nomeMae, estadoCivil, email, celular, endereco, numero,
      bairro, cidade, estado, cep, plano, parentesco])
  return (
    <div id="beneficiario">
      <p className="title text-center text-2xl font-bold p-2 rounded-md">{children}</p>
    <form id="beneficiario" className="grid gap-6 p-6 text-base w-full">
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="nome-titular">
          NOME COMPLETO
        </label>
        <input
          name="nome-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          id="nome-titular"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="cpf-titular">
          CPF
        </label>
        <input
          name="cpf-titular"
          id="cpf-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          placeholder="000.000.000-00"
          onChange={(e) => setCpf(formatCPF(e.target.value))}
          value={cpf}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="dt-nasc-titular">
          DATA DE NASCIMENTO
        </label>
        <input
          name="dt-nasc-titular"
          id="dt-nasc-titular"
          type="date"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          onChange={(e) => setDataNascimento(e.target.value)}
          value={dataNascimento}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1">NOME DA MÃE</label>
        <input
          name="nome-mae-titular"
          id="nome-mae-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          onChange={(e) => setNomeMae(e.target.value)}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="estado-civil-titular">
          ESTADO CIVIL
        </label>
        <select
          id="estado-civil-titular"
          className="border-2 border-[var(--border)] rounded-md w-auto "
          onChange={(e) => setEstadoCivil(e.target.value)}
          value={estadoCivil}
        >
          <option value="">Escolha Seu Estado Civil</option>
          <option value='Solteiro'>Solteiro</option>
          <option value='Casado'>Casado</option>
          <option value='Separado Judicialmente'>Separado Judicialmente</option>
          <option value='Divorciado'>Divorciado</option>
          <option value='Viúvo'>Viúvo</option>
        </select>
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="email-titular">
          E-MAIL
        </label>
        <input
          id="email-titular"
          type="email"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          placeholder="exemplo@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="celular-titular">
          CELULAR
        </label>
        <input
          id="celular-titular"
          type="tel"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          placeholder="(00) 00000-0000"
          onChange={(e) => setCelular(formatCelular(e.target.value))}
          value={celular}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="endereco-titular">
          ENDEREÇO
        </label>
        <input
          id="endereco-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          onChange={(e) => setEndereco(e.target.value)}
          value={endereco}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="numero-titular">
          NÚMERO
        </label>
        <input
          id="numero-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          onChange={(e) => setNumero(e.target.value)}
          value={numero}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="bairro-titular">
          BAIRRO
        </label>
        <input
          id="bairro-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          onChange={(e) => setBairro(e.target.value)}
          value={bairro}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="cidade-titular">
          CIDADE
        </label>
        <input
          id="cidade-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          onChange={(e) => setCidade(e.target.value)}
          value={cidade}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="estado_titular">
          ESTADO
        </label>
        <input
          id="estado-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          onChange={(e) => setEstado(e.target.value)}
          value={estado}
        />
      </div>
      <div className="campo">
        <label className="font-bold mr-1" htmlFor="cep-titular">
          CEP
        </label>
        <input
          id="cep-titular"
          type="text"
          className="border-2 border-[var(--border)] rounded-md w-auto"
          placeholder="00000-000"
          onChange={(e) => setCep(formatCEP(e.target.value))}
          value={cep}
        />
      </div>
      {dependente && (
        <>
        <div className="campo">
          <label className="font-bold mr-1" htmlFor="parentesco">PARENTESCO</label>
          <select id="parentesco" className="border-2 border-[var(--border)] rounded-md w-auto" onChange={(e) => setParentesco(e.target.value)} value={parentesco}>
            <option value="">Escolha um parentesco</option>
            <option value="Cônjuge">Cônjuge</option>
            <option value="Filhos">Filhos</option>
          </select>
        </div>
        </>
      )}
    </form>
    </div>
  );
}
