import Hero from "../components/Hero";
import TrustedTech from "../components/TrustedTech";
import FeaturedProject from "../components/FeaturedProject";
import OtherProjects from "../components/OtherProjects";
import Experience from "../components/Experience";
import Achievement from "../components/Achievement";
import Skills from "../components/Skills";
import CurrentStatus from "../components/CurrentStatus";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedTech />
      <FeaturedProject />
      <OtherProjects />
      <Experience />
      <Achievement />
      <Skills />
      <CurrentStatus />
      <Contact />
    </>
  );
}
