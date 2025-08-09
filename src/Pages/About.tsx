import Navbar from "@/components/Navbar";
import StarryBackground from "@/background/TextureBackground";
import AboutPage from "@/components/AboutPage";
import { Helmet } from "react-helmet";





const About = () => {
    return(
    <>
        <Helmet>
        <meta
          name="description"
          content="Learn more about me, my journey as a MERN stack developer, my skills, interests in cybersecurity, AI/ML, and my passion for web development."
        />
        <meta
          name="keywords"
          content="About me, MERN stack developer, web developer, cybersecurity enthusiast, AI/ML learner, portfolio"
        />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        {/* Open Graph */}
        <meta property="og:title" content="About Me | MERN Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Learn more about me, my journey as a MERN stack developer, my skills, interests in cybersecurity, AI/ML, and my passion for web development."
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me | MERN Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Learn more about me, my journey as a MERN stack developer, my skills, interests in cybersecurity, AI/ML, and my passion for web development."
        />
      </Helmet>
    <Navbar />
    <AboutPage />
    </>    
    );
}

export default About;