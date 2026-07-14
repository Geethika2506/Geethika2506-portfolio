import ScrollyCanvas from "@/components/ScrollyCanvas";
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
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <ScrollProgress />
      <Header />
      <ScrollyCanvas />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Extracurricular />
      <Footer />
    </main>
  );
}
