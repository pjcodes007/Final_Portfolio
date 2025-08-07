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
      <section >

        <Landing />
      </section>
      <section >
        <Projects />
      </section>

      <section >
        <TechSkills />
      </section>

      <section >
        <Connect />
      </section>

      <section >
        <Footer />
      </section>
    </>
  );
};

export default Home;
