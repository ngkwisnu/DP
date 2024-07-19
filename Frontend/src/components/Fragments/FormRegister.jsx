import React, { useEffect, useState } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    try {
      console.log("hai");
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      });
      console.log("gg");
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("Selamat Anda Berhasil Daftar");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Maaf, Terjadi Kesalahan Saat Daftar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Masukkan username anda..."
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="Masukkan email anda..."
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Masukkan password anda..."
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button
        className="bg-[#B2AFE7] w-full px-6 py-2 rounded-full text-white"
        type="submit"
      >
        Daftar
      </button>
    </form>
  );
};

export default FormRegister;
