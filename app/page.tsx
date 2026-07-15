import CyberHero from "@/components/CyberHero";
import About from "@/components/About";
import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-cyber-bg min-h-screen text-white font-sans selection:bg-cyan-400/30 selection:text-white">
      <ScrollProgress />
      <Header />
      <CyberHero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Extracurricular />
      <Footer />
    </main>
  );
}
