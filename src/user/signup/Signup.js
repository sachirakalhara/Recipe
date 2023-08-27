import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollTop } from "../../utils/CommonUtils";
import { allRoutes } from "../../constants/routs";
import LoginSignupContainer from "../components/login-signup-container/LoginSignupContainer";
import { authTypes } from "../../constants/enums";
import Hero from "../../components/Hero";

const Signup = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    if (props.authenticated) {
      navigate(allRoutes.login);
    }
  }, [navigate, props.authenticated]);

  return (
    <div>
      <Hero
        cName="hero-about"
        heroImg="login.png"
        title="Sign up and explore"
        text="Register to access personalized features"
      />
      <LoginSignupContainer type={authTypes.signUp} />
    </div>
  );
};

export default Signup;
