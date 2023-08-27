import { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Hero from "../components/Hero";
import { scrollTop } from "../utils/CommonUtils";

function About() {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <Hero
        cName="hero-about"
        heroImg="about-cover.jpg"
        title="Want to know more about us?"
        text="Let the world knows"
      />
      <AboutUs />
    </>
  );
}

export default About;
