import Navigation from "./components/navigation";
import Initial from "./components/initial";
import Services from "./components/services";
import About from "./components/about";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Contact from "./components/contact";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <main>
        <Initial/>
        <Services/>
        <About/>
        <Benefits/>
        <TestimonialsCarousel/>
        <Contact/>
      </main>

      <footer>
          <Footer/>
      </footer>
    </>
  );
}
