import React, { useEffect } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { scrollTop } from "../utils/CommonUtils";

function Home() {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <Hero
        cName="hero"
        heroImg="icon-banner3jpg.jpg"
        title="Explore Your Taste"
        text="Choose Your Flavour"
      />
      <Card />
    </>
  );
}

export default Home;
