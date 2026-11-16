import Image from "next/image";
import { site } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

export default function Initial() {
  return <><section id="inicio" className="mx-auto grid max-w-7xl items-center gap-4 px-5 pb-8 pt-3 md:min-h-[75vh] md:grid-cols-2 md:gap-12 md:px-8 md:py-20">
    <div className="order-1 aspect-[16/10] overflow-hidden rounded-2xl md:order-2 md:aspect-[4/5]"><Image src={site.heroImagem} alt="Imagem ilustrativa de atendimento estético" width={1600} height={1068} priority sizes="(max-width: 767px) 100vw, 50vw" className="h-full w-full object-cover"/></div>
    <div className="order-2 md:order-1"><p className="mb-2 text-xs font-bold tracking-[.15em] text-destaque md:mb-4">{site.rotulo}</p><h1 className="font-bodoni text-4xl font-bold leading-tight text-escuro md:text-6xl">{site.titulo}</h1><p className="mt-3 max-w-xl text-lg text-texto2 md:mt-5">{site.apoio}</p><div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8"><a className="flex min-h-12 items-center justify-center rounded-md bg-destaque px-6 font-bold text-white" href={waLink("Olá! Vim pelo site e quero agendar um horário. (hero)")} data-track="hero-whatsapp" target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a><a className="flex min-h-12 items-center justify-center rounded-md border-2 border-destaque px-6 font-bold text-destaque" href="#servicos" data-track="hero-servicos">Ver serviços</a>{site.agendamentoUrl && <a className="flex min-h-12 items-center justify-center rounded-md border-2 border-escuro px-6 font-bold text-escuro" href={site.agendamentoUrl} data-track="hero-agenda">Agendar online</a>}</div></div>
  </section>{site.confianca.length > 0 && <div className="bg-salvia px-5 py-4"><ul className="mx-auto flex max-w-7xl flex-wrap gap-5 font-bold text-escuro">{site.confianca.slice(0,3).filter(Boolean).map(item => <li key={item}>{item}</li>)}</ul></div>}</>;
}
