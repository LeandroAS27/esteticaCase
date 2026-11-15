"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { site } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

const links = [["Serviços", "#servicos"], ["Quem atende", "#quem-atende"], ["Como funciona", "#como-funciona"], ["Dúvidas", "#duvidas"], ["Como chegar", "#como-chegar"]];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  return <header className="sticky top-0 z-50 border-b border-salvia bg-creme">
    <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-5 lg:px-8">
      <a href="#inicio" className="min-w-0 flex-1 truncate font-bodoni text-lg font-bold text-escuro md:text-xl">{site.nome}</a>
      <nav aria-label="Navegação principal" className="hidden items-center gap-4 lg:flex">{links.map(([label, href]) => <a key={href} className="text-sm font-bold text-texto hover:underline" href={href}>{label}</a>)}</nav>
      <a className="flex min-h-11 items-center rounded-md bg-destaque px-4 font-bold text-white" href={site.agendamentoUrl || waLink("Olá! Vim pelo site e quero agendar um horário. (menu)")} data-track="menu-agendar" target="_blank" rel="noopener noreferrer">Agendar</a>
      <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-md border border-escuro lg:hidden">{open ? <FiX size={24}/> : <FiMenu size={24}/>}</button>
    </div>
    <nav id="menu-mobile" aria-label="Navegação móvel" className={`${open ? "block" : "hidden"} border-t border-salvia bg-creme lg:hidden`}><div className="px-5 py-2">{links.map(([label, href]) => <a key={href} className="flex min-h-12 items-center border-b border-salvia font-bold" href={href} onClick={() => setOpen(false)}>{label}</a>)}</div></nav>
  </header>;
}
