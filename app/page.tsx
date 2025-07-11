"use client";

import Header from "@/app/components/Header/Header";
import Recado from "@/app/components/Recado/Recado";
import Beneficiario from "@/app/components/Beneficiario/Beneficiario";
import { BeneficiarioTypes } from "@/app/types/Beneficiario";
import { useState } from "react";
import { Button } from "@/app/components/Button/Button";
import { CircleCheck, CirclePlus, RotateCcw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { format } from "path";
import { formatData } from "./components/Format/Format";
import Concluido from "./components/Concluido/Concluido";

export default function Home() {
  const [dependente, setDependente] = useState(false);
  const [dependentes, setDependentes] = useState(0);
  const [enviado, setEnviado] = useState(false);
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const [inputsDependentes, setInputsDependentes] = useState<
    BeneficiarioTypes[]
  >([]);
  const [inputsBeneficiario, setInputsBeneficiario] =
    useState<BeneficiarioTypes>({
      empresa: "",
      nome: "",
      cpf: "",
      dataNascimento: formatData(""),
      nomeMae: "",
      estadoCivil: "",
      email: "",
      celular: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
      plano: "",
      parentesco: "",
    });

  const atualizarDepdentes = (index: any, novoValor: BeneficiarioTypes) => {
    setInputsDependentes((prev) => {
      const novos = [...prev];
      novos[index] = novoValor;
      return novos;
    });
  };

  const enviarConsole = () => {
    const dados = [
      { ...inputsBeneficiario, tipo: "Titular" },
      ...inputsDependentes.map((dep) => ({ ...dep, tipo: "Dependente" })),
    ];

    console.log("DADOS A ENVIAR:", dados);
  };

  const handleClick = () => {
    handleSubmit();
  };

  const handleSubmit = async () => {
    const dados = [
      { ...inputsBeneficiario, tipo: "Titular" },
      ...inputsDependentes.map((dep) => ({ ...dep, tipo: "Dependente" })),
    ];

    const formData = dados
      .map((item, index) => {
        return Object.entries(item)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(`${key}_${index}`)}=${encodeURIComponent(
                value
              )}`
          )
          .join("&");
      })
      .join("&");

    try {
      if (!api_key) {
        throw new Error("API key is not defined.");
      }
      const resposta = await fetch(api_key, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const resultado = await resposta.text();
      console.log("Resposta do Google Sheets:", resultado);

      if (resultado === "OK") {
        setEnviado(true);
      } else {
        alert("Houve um problema ao enviar os dados.");
      }
    } catch (erro) {
      console.error("Erro ao conectar com o Google Sheets:", erro);
      alert("Erro de conexão.");
    }
  };

  return (
    <div className="m-0 p-0 box-border bg-[url('/w3g_background.png')] bg-cover bg-center min-h-screen flex justify-center items-center">
      {enviado && <Concluido />}
      <div className="w-full max-w-5xl p-2 sm:p-4 md:p-8 lg:p-10 bg-[var(--background)]/15 backdrop-blur-md shadow-2xl rounded-lg flex flex-col gap-4">
        <Header />
        <h2 className="text-xl sm:text-2xl md:text-3xl p-2 sm:p-4 border-b-2 border-[var(--border)] bg-[var(--bg-title)] text-center text-white font-bold rounded-t-md">
          PLANO ODONTOLÓGICO
        </h2>
        <Recado />
        <div className="bg-[var(--foreground)] border-2 border-[var(--border)] rounded-b-md p-2 sm:p-4 md:p-6 flex flex-col gap-4">
          <Beneficiario setInputsBeneficiario={setInputsBeneficiario}>
            TITULAR
          </Beneficiario>

          {dependente && (
            <AnimatePresence>
              {Array.from({ length: dependentes }).map((_, index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: [0, 1], y: [100, 10, 0] }}
                  className="mt-4"
                >
                  <Beneficiario
                    key={`dependente-${index}`}
                    dependente={true}
                    setInputsBeneficiario={(dados) =>
                      atualizarDepdentes(index, dados)
                    }
                  >
                    DEPENDENTE {index + 1}
                  </Beneficiario>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 px-2 py-2 bg-[var(--foreground)] rounded-md my-3 max-w-full w-full">
          {!dependente && (
            <div className="dependente md:w-[30%] text-white">
              <input
              className="text-white border-2 border-[var(--border)] rounded-md w-full sm:w-32 bg-[var(--background)] my-2 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[var(--border)]"
              type="number"
              value={dependentes}
              onChange={(e) => setDependentes(e.target.valueAsNumber)}
              min={0}
            />
            </div>
          )}
          {!dependente && (
            <div>
              <Button
              valid="adicionar"
              onClick={() => setDependente(true)}
              className="w-full sm:w-auto"
            >
              Adicionar Dependentes
              <CirclePlus className="ml-2" />
            </Button>
            </div>
          )}
          {dependente && (
            <Button
              valid="excluir"
              onClick={() => {
                setDependente(false);
                setInputsDependentes([]);
                setDependentes(0);
              }}
              className="w-full sm:w-auto"
            >
              Excluir Dependente
              <CirclePlus className="ml-2 rotate-45 text-red" />
            </Button>
          )}
        </div>

        <div className="flex justify-center px-2 py-2 bg-[var(--foreground)] rounded-md my-3 max-w-full w-full">
          <Button
            valid="enviar"
            onClick={handleClick}
            className="w-full sm:w-auto"
          >
            ENVIAR
            <CircleCheck className="check ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
