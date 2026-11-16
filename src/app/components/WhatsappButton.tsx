"use client";
import { useEffect, useState } from "react";
import { FiMessageCircle, FiMapPin } from "react-icons/fi";
import { site } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

export default function WhatsappButton() {
  // Visible in the server HTML and without JavaScript; observers refine visibility after hydration.
  const [show, setShow] = useState(true);
  useEffect(() => {
    const hero = document.querySelector("#inicio");
    const footer = document.querySelector("footer");
    if (!hero || !footer || !("IntersectionObserver" in window)) return;
    let heroPassed = hero.getBoundingClientRect().bottom <= 0;
    let footerVisible = false;
    const update = () => setShow(heroPassed && !footerVisible);
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
      update();
    });
    const footerObserver = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      update();
    });
    heroObserver.observe(hero);
    footerObserver.observe(footer);
    update();
    return () => { heroObserver.disconnect(); footerObserver.disconnect(); };
  }, []);

  return <>
    <div className={`${show ? "flex" : "hidden"} fixed inset-x-0 bottom-0 z-50 min-h-14 items-center gap-1 border-t border-salvia bg-creme px-2 pb-[env(safe-area-inset-bottom)] shadow-lg md:hidden`}>
      <a href={site.agendamentoUrl || waLink("Olá! Vim pelo site e quero agendar um horário. (barra)")} data-track="barra-agendar" target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-[2] items-center justify-center rounded-md bg-destaque px-2 font-bold text-white">Agendar</a>
      <a href={waLink("Olá! Vim pelo site e quero informações. (barra)")} data-track="barra-whatsapp" target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-1 flex-col items-center justify-center text-xs font-bold text-escuro"><FiMessageCircle size={18}/>WhatsApp</a>
      <a href={site.mapsUrl} data-track="barra-rota" target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-1 flex-col items-center justify-center text-xs font-bold text-escuro"><FiMapPin size={18}/>Como chegar</a>
    </div>
    <a href={waLink("Olá! Vim pelo site e quero agendar um horário. (flutuante)")} data-track="flutuante-whatsapp" target="_blank" rel="noopener noreferrer" className={`${show ? "md:flex" : "md:hidden"} fixed bottom-5 right-5 z-40 hidden min-h-12 items-center gap-2 rounded-full bg-destaque px-6 font-bold text-white shadow-lg`}><FiMessageCircle/>Agendar pelo WhatsApp</a>
  </>;
}
