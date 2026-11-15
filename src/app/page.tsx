import Navigation from "./components/navigation";
import Initial from "./components/initial";
import Services from "./components/services";
import About from "./components/about";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Contact from "./components/contact";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import WhatsappButton from "./components/WhatsappButton";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Resultados from "./components/Resultados";
import FinalCta from "./components/FinalCta";
import { site } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "BeautySalon", name: site.nome,
    address: { "@type": "PostalAddress", streetAddress: site.endereco, addressLocality: site.cidade, addressRegion: "SP", addressCountry: "BR" },
    telephone: site.telefoneExibicao,
    url: site.url,
    openingHoursSpecification: site.horarios.filter(item => item.horario !== "A confirmar").map(item => ({ "@type": "OpeningHoursSpecification", dayOfWeek: item.dia, opens: item.horario })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      {site.demo && <div className="bg-escuro px-5 py-1 text-center text-xs font-bold text-white">Página de demonstração — dados fictícios</div>}
      <Navigation/>

      <main>
        <Initial/>
        <Services/>
        <About/>
        <Benefits/>
        <Gallery/>
        <TestimonialsCarousel/>
        <Faq/>
        <Resultados/>
        <Contact/>
        <FinalCta/>
      </main>

      <Footer/>
      <WhatsappButton/>
    </>
  );
}
