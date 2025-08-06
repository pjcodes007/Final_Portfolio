import Navbar from "@/components/Navbar";
import Landing from "@/components/LandingPage";
import NoiseBackground from "@/background/NoiseBackground";
import TechSkills from "@/components/TechSkills";
import Connect from "@/components/Invite";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { DotBackgroundDemo } from "@/background/DotBackground";
import StarryBackground from "@/background/TextureBackground";

const Home = () => {
  return (
    <>
      <NoiseBackground />
      <Navbar />
      <section className="relative z-20">

        <Landing />
      </section>
      <section className="relative z-20 ">
        <Projects />
      </section>

      <section className="relative z-20">
        <TechSkills />
      </section>

      <section className="relative z-20">
        <Connect />
      </section>

      <section className="relative z-20">
        <Footer />
      </section>
    </>
  );
};

export default Home;
