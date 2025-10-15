import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Scene3D from "@/components/Scene3D";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
