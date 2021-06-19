import React from "react";
import FooterComponent from "../common/Footer";
import HeaderComponent from "../common/Header";
import LoginForm from "./LoginForm";
import "./style.scss";

function Login() {
  return (
    <div className="d-flex flex-column login-main">
      <HeaderComponent />
      <div className="m-auto login-form">
        <div className="text-center login-header">Login</div>
        <LoginForm />
      </div>
      <FooterComponent className="mt-auto" />
    </div>
  );
}

export default Login;
