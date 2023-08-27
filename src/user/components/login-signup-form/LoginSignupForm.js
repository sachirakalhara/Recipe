import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signUpFormInitialState,
  authTypes,
  loginFormInitialState,
} from "../../../constants/enums";
import { ACCESS_TOKEN } from "../../../constants";
import { allRoutes } from "../../../constants/routs";
import "./LoginSignupForm.css";
import { signUp, login } from "../../../utils/APIUtils";
import {
  notificationTypes,
  showNotification,
} from "../../../utils/CommonUtils";

const LoginSignupForm = (props) => {
  const { type, reloadCurrentUser } = props;
  const navigate = useNavigate();
  const [form, setForm] = useState(
    type === authTypes.signUp ? signUpFormInitialState : loginFormInitialState
  );
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    setError(null);

    setForm((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  };

  const validateInput = (form) => {
    if (form.email != null && form.password != null) {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateInput(form)) {
      setError("Fill all the fields");
      return;
    }

    const action = props.type === authTypes.signUp ? signUp : login;

    action(form)
      .then((response) => {
        if (props.type === authTypes.login) {
          const access_token = response.data.access_token;
          localStorage.setItem(ACCESS_TOKEN, access_token);
          navigate(allRoutes.home);
          showNotification(notificationTypes.success, "SuccessFully logged in");
          reloadCurrentUser();
        } else {
          navigate(allRoutes.login);
          showNotification(
            notificationTypes.success,
            "Registration successful."
          );
        }
      })
      .catch((error) => {
        setError(error.message);
        showNotification(notificationTypes.error, "Something went wrong.");
      })
      .finally(() => {
        setForm(
          props.type === authTypes.signUp
            ? signUpFormInitialState
            : loginFormInitialState
        );
        setError(null);
      });
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-item">
          <input
            type="email"
            name="email"
            className="login-form-item-email form-control"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="login-form-item">
          <input
            type="password"
            name="password"
            className="login-form-item-password form-control"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && (
          <div className="warning-message">
            <i class="fas fa-exclamation-circle"></i> {error}
          </div>
        )}
        <div className="form-item">
          <button
            type="submit"
            className="login-form-item-submit btn btn-block btn-primary mb-4"
          >
            {type === authTypes.signUp ? authTypes.signUp : authTypes.login}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignupForm;
