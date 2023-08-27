import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import LoginSignupContainer from "../components/login-signup-container/LoginSignupContainer";
import { authTypes } from "../../constants/enums";
import { allRoutes } from "./../../constants/routs";
import { scrollTop } from "../../utils/CommonUtils";

const Login = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    if (props.authenticated) {
      navigate(allRoutes.home);
    }
  }, [navigate, props.authenticated]);

  return (
    <div>
      <Hero
        cName="hero-about"
        heroImg="login.png"
        title="Login and explore"
        text="Log in to access personalized features"
      />
      <LoginSignupContainer
        type={authTypes.login}
        reloadCurrentUser={props.reloadCurrentUser}
      />
    </div>
  );
};

export default Login;
