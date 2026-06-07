import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { PlacesMap } from "@/components/PlacesMap";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SideRail } from "@/components/SideRail";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <SideRail />
      <main>
        <Hero />
        <PlacesMap />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
