import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormLogin from "../Fragments/FormLogin";

const Login = () => {
  return (
    <AuthLayout
      img="/img/img.png"
      title="Login Form"
      type="login"
      desc="Welcome, please input to get access"
    >
      <FormLogin />
    </AuthLayout>
  );
};

export default Login;
