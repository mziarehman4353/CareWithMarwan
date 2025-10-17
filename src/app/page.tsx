import Hero from "./components/Hero";
import About from "./components/about";
import Services from "./components/Services";
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
            <section className="max-w-6xl mx-auto py-8 px-6 text-center">
              <h2 className="text-3xl font-semibold text-black">Our Moments</h2>
            </section>
        <Media />
      </section>
      
    </div>
  );
}
