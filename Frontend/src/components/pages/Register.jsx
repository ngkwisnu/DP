import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormRegister from "../Fragments/FormRegister";

const Register = () => {
  return (
    <AuthLayout
      img="/img/img2.png"
      title="Signup Form"
      type="register"
      desc="Create your an account to get login"
    >
      <FormRegister />
    </AuthLayout>
  );
};

export default Register;
