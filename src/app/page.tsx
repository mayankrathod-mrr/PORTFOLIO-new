import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection"; // <-- IMPORT our new tool

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* The Hero section doesn't need to be animated because it's visible at the start */}
      <Hero />

      {/* Now we wrap every other section to make it animate on scroll */}
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Resume />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </main>
  );
}
