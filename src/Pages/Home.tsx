import React from "react";
import {Helmet} from "react-helmet"
import Navbar from "@/components/Navbar";
import Landing from "@/components/LandingPage";
import NoiseBackground from "@/background/NoiseBackground";
import TechSkills from "@/components/TechSkills";
import Connect from "@/components/Invite";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <>
      <Helmet>
        
        <meta
          name="description"
          content="Welcome to my portfolio website showcasing MERN stack projects, tech skills, and more. Let's build something amazing together!"
        />
        <meta name="keywords" content="MERN stack, web developer, wordpress , portfolio, React, Node.js, MongoDB, JavaScript, web development" />
        <meta name="author" content="Praanjal Joshi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta property="og:title" content="My Portfolio | MERN Stack Developer & Web Enthusiast" />
        <meta property="og:description" content="Welcome to my portfolio website showcasing MERN stack projects, tech skills, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />

       
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Portfolio | MERN Stack Developer & Web Enthusiast" />
        <meta name="twitter:description" content="Welcome to my portfolio website showcasing MERN stack projects, tech skills, and more." />
      </Helmet>

      <NoiseBackground />
      <Navbar />
      <section>
        <Landing />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <TechSkills />
      </section>
      <section>
        <Connect />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
