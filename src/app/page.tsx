import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import ThingsILikeToDo from "@/components/ThingsILikeToDo";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Achievements />
      <ThingsILikeToDo />
      <Contact />
    </main>
  );
}
