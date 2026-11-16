import Image from "next/image";
import { site, type Resultado } from "@/config/site";

function valido(item: Resultado) {
  // Médico: Res. CFM 2.336/2023, art. 14. Antes/depois isolado não é permitido; conteúdo educativo exige ao menos 4 pacientes e resultados insatisfatórios/complicações. Nunca renderizar aqui.
  if (item.profissao === "medico") return false;
  if (!item.antes || !item.depois || !item.legendaAntes || !item.legendaDepois || item.autorizacaoTCLE !== true) return false;
  // Biomédico: Res. CFBM 330/2020 e 240/2014; identificação, inscrição CRBM e habilitação obrigatórias.
  if (item.profissao === "biomedico" && (!item.nomeProfissional || !item.registro || !item.habilitacao)) return false;
  // Esteticista: Lei 13.643/2018. Todos: CDC art. 37; sem foto de banco, publicidade enganosa ou promessa.
  return true;
}
export default function Resultados() { if (site.demo) return null; const itens = site.resultados?.filter(valido); if (!itens?.length) return null; return <section className="mx-auto max-w-7xl px-5 py-16 md:px-8"><h2 className="font-bodoni text-3xl font-bold text-escuro">Resultados autorizados</h2>{itens.map((item, index) => <figure key={index} className="mt-8"><div className="grid grid-cols-2 gap-3"><Image src={item.antes} alt={item.legendaAntes} width={480} height={480}/><Image src={item.depois} alt={item.legendaDepois} width={480} height={480}/></div><figcaption className="mt-3 text-sm"><p>{item.legendaAntes} · {item.legendaDepois}</p>{item.profissao === "biomedico" && <><p>{item.nomeProfissional} · {item.registro} · {item.habilitacao}</p><p>Divulgação autorizada pelo usuário em TCLE</p><p>Esta imagem não representa, em hipótese alguma, garantia de resultado. Cada ser humano tem características anatômicas e fisiológicas únicas.</p></>}</figcaption></figure>)}</section>; }
