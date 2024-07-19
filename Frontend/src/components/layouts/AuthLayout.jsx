import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, children, desc, type, img } = props;
  return (
    <div className="bg-[#F2F2F2] flex justify-center items-center min-h-screen py-10">
      <div className="w-full max-w-5xl px-6">
        <div className="bg-white flex flex-col md:flex-row items-center gap-y-6 md:gap-y-0 md:gap-x-2 rounded-3xl shadow-lg">
          <img src={img} className="w-full md:w-auto hidden md:block lg:block" alt="" />
          <div className="w-full md:w-2/3 p-8">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="font-medium text-sm text-gray-600 mb-4">{desc}</p>
            <div className="text-left">{children}</div>
            <p className="mt-6 text-center md:text-left">
              {type === "login"
                ? "Belum punya akun? "
                : "Sudah punya akun? "}
              {type === "login" ? (
                <Link className="text-blue-500" to="/register">
                  Daftar Sekarang
                </Link>
              ) : (
                <Link className="text-blue-500" to="/login">
                  Masuk Sekarang
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
