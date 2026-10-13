import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProductArtifacts from "@/components/ProductArtifacts";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://yashgargcv.lovable.app/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ProductArtifacts />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
