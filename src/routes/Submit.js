import { useEffect } from "react";
import ReceipForm from "../components/AddReceip/ReceipForm";
import Hero from "../components/Hero";
import { scrollTop } from "../utils/CommonUtils";

function Submit() {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <Hero
        cName="hero-submit"
        heroImg="submit-cover.jpg"
        title="Share Your Receip"
        text="Let the world knows"
      />
      <ReceipForm />
    </>
  );
}

export default Submit;
