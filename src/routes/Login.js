import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupContainer from "../user/components/login-signup-container/LoginSignupContainer";
import { authTypes } from "../../constants/enums";
import { allRoutes } from "./../../constants/routs";
import { scrollTop } from "../../utils/Utils";
import "./Login.scss";

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
    <LoginSignupContainer
      type={authTypes.login}
      reloadCurrentUser={props.reloadCurrentUser}
    />
  );
};

export default Login;
