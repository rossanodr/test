"use client";

import { useState } from "react";

import { Registro, Root } from "../../next-env";
import data from "./data/1.json";

export default function Home() {
  const [search, setSearch] = useState("");

  const typedData: Root = data as Root;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {typedData.registros.map((registro: Registro) => (
          <div key={registro.registro.id}>
            <h2>{registro.registro.numero}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: registro.registro.txtEmentaHighlight,
              }}
            />
            {/* Renderize outras informações conforme necessário */}
            <p>ID: {registro.registro.id}</p>
            <p>Número: {registro.registro.numero}</p>
            <p>Tipo: {registro.registro.tipo.nome}</p>
            <p>Orgão Judicante: {registro.registro.orgaoJudicante.descricao}</p>
            <p>Orgão: {registro.registro.orgao.nome}</p>
            <p>Número Processo Interno: {registro.registro.numProcInt}</p>
            <p>Ano Processo Interno: {registro.registro.anoProcInt}</p>
            <p>Número Processo: {registro.registro.numProc}</p>
            <p>Ano Processo: {registro.registro.anoProc}</p>
            <p>Código Fase: {registro.registro.codFase}</p>
            <p>Data Fase: {registro.registro.dtaFase}</p>
            <p>Indicador Tipo Acórdão: {registro.registro.indTipAcordao}</p>
            <p>Data Julgamento: {registro.registro.dtaJulgamento}</p>
            <p>Número Formatado: {registro.registro.numFormatado}</p>
            <p>Número Interno: {registro.registro.numInterno}</p>
            <p>Data de Publicação: {registro.registro.dtaPublicacao}</p>
            <p>Data de Ordenação: {registro.registro.dtaOrdenacao}</p>
            <p>Código Ministro Relator: {registro.registro.codMinRelator}</p>
            <p>Nome Relator: {registro.registro.nomRelator}</p>
            <p>Sexo Relator: {registro.registro.sexRelator}</p>
            <div
              dangerouslySetInnerHTML={{ __html: registro.registro.ementaHtml }}
            />
            <p>Ementa: {registro.registro.ementa}</p>
            <p>Ementa Não Analisada: {registro.registro.ementaNaoAnalisada}</p>
            <p>Texto Inteiro Teor: {registro.registro.txtInteiroTeor}</p>
            <p>
              Texto Inteiro Teor Não Analisado:{" "}
              {registro.registro.txtInteiroTeorNaoAnalisado}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: registro.registro.inteiroTeorHtml,
              }}
            />
            <p>Inteiro Teor (RTF): {registro.registro.inteiroTeorRtf}</p>
            <p>Dispositivo: {registro.registro.dispositivo}</p>
            <p>
              Dispositivo Não Analisado:{" "}
              {registro.registro.dispositivoNaoAnalisado}
            </p>
            <p>
              Numeracao Unica - Número:{" "}
              {registro.registro.numeracaoUnica.numero}
            </p>
            <p>
              Numeracao Unica - Dígito:{" "}
              {registro.registro.numeracaoUnica.digito}
            </p>
            <p>Numeracao Unica - Ano: {registro.registro.numeracaoUnica.ano}</p>
            <p>
              Numeracao Unica - Orgão: {registro.registro.numeracaoUnica.orgao}
            </p>
            <p>
              Numeracao Unica - Tribunal:{" "}
              {registro.registro.numeracaoUnica.tribunal}
            </p>
            <p>
              Numeracao Unica - Vara: {registro.registro.numeracaoUnica.vara}
            </p>
            <p>
              Numeracao Anterior - Número:{" "}
              {registro.registro.numeracaoAnterior?.numero}
            </p>
            <p>
              Numeracao Anterior - Ano:{" "}
              {registro.registro.numeracaoAnterior?.ano}
            </p>
            <p>
              Numeracao Anterior - Vara:{" "}
              {registro.registro.numeracaoAnterior?.vara}
            </p>
            <p>
              Numeracao Anterior - Tribunal:{" "}
              {registro.registro.numeracaoAnterior?.tribunal}
            </p>
            <p>
              Numeracao Anterior - Número Sequencial:{" "}
              {registro.registro.numeracaoAnterior?.numeroSequencial}
            </p>
            <p>
              Número Processo Documento: {registro.registro.numProcDocumento}
            </p>
            <p>Texto Indicador: {registro.registro.txtIndicador}</p>
            {registro.registro.indicadores.map((indicador) => (
              <div key={indicador.codIndicador}>
                <p>Código Indicador: {indicador.codIndicador}</p>
                <p>Descrição Indicador: {indicador.desIndicador}</p>
              </div>
            ))}
            <p>Código CPF Signatário: {registro.registro.codCPFSignatario}</p>
            <p>Tema Processo: {registro.registro.txtTemaProc}</p>
            {registro.registro.temaProcs?.map((tema) => (
              <div key={tema.codTemaProc}>
                <p>Código Tema Processo: {tema.codTemaProc}</p>
                <p>Código Assunto CNJ: {tema.codAssuntoCNJ}</p>
                <p>Significado Tema Processo: {tema.sigTemaProc}</p>
                <p>Descrição Tema Processo: {tema.desTemaProc}</p>
                <p>Código Tema Processo Superior: {tema.codTemaProcSuperior}</p>
              </div>
            ))}
            <p>
              Número Formatado Anterior: {registro.registro.numFormatadoAnt}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
