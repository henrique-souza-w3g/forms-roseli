import { useEffect, useState } from "react";
import Recado from "../Recado/Recado";
import { formatCelular, formatCEP, formatCPF, formatData } from "../Format/Format";

interface BeneficiarioProps {
  dependente?: boolean
  setInputsBeneficiario: (inputs:any) => void;
  children: React.ReactNode
}

export default function Beneficiario({dependente, setInputsBeneficiario, children}: BeneficiarioProps) {
  const [empresa, setEmpresa] = useState('')
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
  const [plano, setPlano] = useState('')
  const [parentesco, setParentesco] = useState('')

  const cnpj = [
    "05.632.812/0001-73 -	PAULI GOLD PUBLICIDADE, PROPAGANDA, ASSESSORIA EMPRESARIAL E COMERCIAL LTDA",
"05.963.553/0001-63	- VILLA D'ORO JOIAS E RELOJOARIA LTDA",
"17.855.301/0001-08	- CAPITAL JOALHERIAS LTDA",
"09.147.433/0001-49	- JOALHERIA RELOJOARIA E OTICA VERSALHES LTDA",
"50.286.013/0001-47	- ITATIAIA JOALHERIA E RELOJOARIA SLU LTDA",
"35.965.790/0001-24	- OPTIMA ASSESSORIA EMPRESARIAL COMERCIAL SLU LTDA",
"43.313.680/0001-06	- OTICAS CASA DAS ALIANCAS SLU LTDA",
"18.768.152/0001-02	- JOALHERIA E RELOJOARIA BELMUDES LTDA",
"10.808.127/0001-95	- JOALHERIA RELOJOARIA E OTICA NAKAMURA LTDA",
"11.041.151/0001-04	- GOLDEN PREMIUM JOALHERIA RELOJOARIA COMERCIO ELETRONICO LTDA",
"10.447.012/0001-12	- JOALHERIA E RELOJOARIA MONTANARO LTDA",
"10.655.670/0001-08	- JOALHERIA RELOJOARIA BERTOLLINI LTDA",
"10.731.548/0001-65	- RELOJOARIA E JOALHERIA VALENTTINA LTDA",
"18.891.980/0001-25	- JOALHERIA E RELOJOARIA MAYA LTDA",
"26.751.544/0001-89	- JOALHERIA E RELOJOARIA GRANDE RIO LTDA",
"34.612.780/0001-42	- JOALHERIA E RELOJOARIA A ITALIANA LTDA",
"16.991.375/0001-09	- RELOJOARIA JOALHERIA AZURRA LTDA",
"10.617.357/0001-77	- RELOJOARIA YOSHIDA LTDA",
"10.416.454/0001-00	- RELOJOARIA,OTICA E JOALHERIA KENSHIMA LTDA",
"08.477.876/0001-35	- OTICA E RELOJOARIA TOTINHA LTDA",
"05.684.028/0001-09	- LA BELLE COMERCIO DE JOIAS E RELOGIOS LTDA",
"07.916.503/0001-50	- OTICA, RELOJOARIA E JOALHERIA VILLA BELLA LTDA",
"10.808.127/0001-95	- JOALHERIA E RELOJOARIA NAKAMURA LTDA",
"05.979.670/0001-15	- VANITY JOALHERIA E RELOJOARIA LTDA",
"07.284.036/0001-93	- VICENZA OURO OTICA RELOJOARIA E JOALHERIA LTDA",
"13.543.175/0001-97	- JOALHERIA E RELOJOARIA DE LUCCA LTDA",
"09.174.508/0001-80	- JOALHERIA E RELOJOARIA TAKEDA LTDA",
"08.211.919/0001-36	- RELOJOARIA E OTICA AIRENNI LTDA",
"12.612.051/0001-53	- FSR CONTABILIDADE E SERVICOS DE APOIO ADMINISTRATIVO LTDA",
"09.393.189/0001-02	- OTICA, RELOJOARIA E JOALHERIA YAMAMOTO LTDA",
"05.685.676/0001-80	- JOALHERIA TERNURA LTDA",
"17.855.301/0001-08	- CAPITAL JOALHERIAS LTDA",
"08.456.304/0001-70	- RELOJOARIA E OTICA KAMIMURA LTDA",
"11.054.166/0001-07	- RELOJOARIA E JOALHERIA BELLINE LTDA",
"11.991.806/0001-05	- JOALHERIA RELOJOARIA MARTINEZ LTDA",
"08.289.200/0001-18	- JOALHERIA E RELOJOARIA VERONEZ LTDA",
"08.812.531/0001-90	- JOALHERIA E RELOJOARIA DINAMICA LTDA",
"05.669.646/0001-80	- GOLDY JOIAS OTICA E RELOJOARIA LTDA",
"12.496.872/0001-71	- RELOJOARIA E JOALHERIA MINORU LTDA",
"05.657.620/0001-11	- BUONO ORO JOALHERIA E OTICA LTDA",
"12.750.966/0001-25	- JOALHERIA E RELOJOARIA GIOVANONNI LTDA",
"12.050.228/0001-75	- RELOJOARIA JOALHERIA MONTREAL LTDA",
"09.199.306/0001-93	- RELOJOARIA TAKESHITA LTDA",
"14.304.931/0001-98	- JOALHERIA E RELOJOARIA PIAZZA D'ORO LTDA",
"34.675.706/0003-37	- GUANABARA JOIAS, RELOGIOS E OTICA LTDA",
"17.201.139/0001-04	- RELOJOARIA JOALHERIA BATISTELLA LTDA",
"05.755.953/0001-83	- RELOJOARIA E OTICA CANAA LTDA",
"07.540.726/0001-66	- OTICA, RELOJOARIA E JOALHERIA TANAKA LTDA",
"08.883.554/0001-96	- ANDERSON INDUSTRIA E COMERCIO DE JOIAS SLU LTDA",
"16.802.196/0001-78	- RELOJOARIA JOALHERIA AGOSTINETTI LTDA",
"12.939.102/0001-56	- RELOJOARIA E JOALHERIA AKEMI LTDA",
"11.272.899/0001-18	- RELOJOARIA E OTICA DI MONACO LTDA",
"07.407.436/0001-49	- JOALHERIA E RELOJOARIA DI NAPOLI LTDA",
"09.340.565/0001-92	- RELOJOARIA HERNANDEZ LTDA",
"14.254.886/0001-04	- JOALHERIA E RELOJOARIA GIANNINI LTDA",
"07.295.169/0001-65	- JOALHERIA E RELOJOARIA VERONA LTDA",
"18.856.277/0001-86	- JOALHERIA E RELOJOARIA BRISTOL LTDA",
"08.528.884/0001-63	- RELOJOARIA JOALHERIA E OTICA MANZINNI LTDA",
"54.702.877/0001-53	- AMALLIA JOIAS E RELOGIOS LTDA",
"16.844.460/0001-36	- JOALHERIA E RELOJOARIA SAN GENARO LTDA",
"10.416.454/0001-00	- RELOJOARIA,OTICA E JOALHERIA KENSHIMA LTDA",
  ]

  useEffect(() => {
    setInputsBeneficiario({
      empresa, nome, cpf, dataNascimento, nomeMae, estadoCivil, email, celular, endereco, numero,
      bairro, cidade, estado, cep, plano, parentesco
    })
  }, [ empresa, nome, cpf, dataNascimento, nomeMae, estadoCivil, email, celular, endereco, numero,
      bairro, cidade, estado, cep, plano, parentesco])
  return (
    <div id="beneficiario">
      <p className="title text-center text-2xl font-bold p-2">{children}</p>
    <form id="beneficiario" className="grid gap-6 p-6 text-base w-full">
      {!dependente && (
        <div className="campo" id="empresa">
        <label htmlFor="empresa" className="font-bold mr-1">
          EMPRESA
        </label>
        <select
          id="empresa"
          className="border-2 border-[var(--border)] rounded-md w-fit"
          onChange={(e) => setEmpresa(e.target.value)}
          value={empresa}
        >
          <option value="">Escolha Sua Empresa</option>
          {cnpj.map((cnpj, index) => (
            <option key={index} value={cnpj}>{cnpj}</option>
          ))}
        </select>
      </div>
      )}
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
        <label className="font-bold mr-1" htmlFor="">
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
        <div className="campo">
        <label className="font-bold mr-1" htmlFor="plano">PLANO</label>
        <select id="plano" className="border-2 border-[var(--border)] rounded-md w-auto" onChange={(e) => setPlano(e.target.value)} value={plano}>
          <option value="">Escolha um plano</option>
          <option value="Dental 200 Doc - R$13,07">Dental 200 Doc - R$13,07</option>
          <option value="Dental E 300 - R$51,81">Dental E 300 - R$51,81</option>
        </select>
      </div>
    )}
      {dependente && (
        <>
        <div className="campo">
          <label className="font-bold mr-1" htmlFor="parentesco">PARENTESCO</label>
          <select id="parentesco" className="border-2 border-[var(--border)] rounded-md w-auto" onChange={(e) => setParentesco(e.target.value)} value={parentesco}>
            <option value="">Escolha um parentesco</option>
            <option value="Pais">Pais</option>
            <option value="Irmãos">Irmãos</option>
            <option value="Cônjuge">Cônjuge</option>
            <option value="Filhos">Filhos</option>
            <option value="Sobrinhos">Sobrinhos</option>
            <option value="Netos">Netos</option>
            <option value="Tios">Tios</option>
          </select>
        </div>
        </>
      )}
    </form>
    </div>
  );
}

// voltando para o normal
