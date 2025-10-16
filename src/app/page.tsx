import Hero from "./components/Hero";
import About from "./components/about";
import Services from "./components/ServiceCard";
import Media from "./components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
      <section id="media" className="scroll-mt-20">
        <Media />
      </section>
      
    </div>
  );
}
