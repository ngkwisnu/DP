import React from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import AuthLogin from "../../authLogin";

const FormLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    try {
      console.log("hai");
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      console.log("gg");
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        alert("Selamat Anda Berhasil Login");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Maaf, Terjadi Kesalahan Saat Login");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Email"
        type="email"
        placeholder="Masukkan email anda..."
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Masukkan password anda..."
        name="password"
      />
      <button
        className="bg-[#B2AFE7] w-full px-6 py-2 rounded-full text-white"
        type="submit"
      >
        Masuk
      </button>
    </form>
  );
};

export default AuthLogin(FormLogin);
