import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Detail from "./dashboard/component/Detail.jsx";
import About from "./components/pages/About.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="https://dongeng-pustaka.vercel.app//" element={<App />} />
        <Route
          path="https://dongeng-pustaka.vercel.app//login"
          element={<Login />}
        />
        <Route
          path="https://dongeng-pustaka.vercel.app//register"
          element={<Register />}
        />
        <Route
          path="https://dongeng-pustaka.vercel.app//dashboard"
          element={<Dashboard />}
        />
        <Route
          path="https://dongeng-pustaka.vercel.app//dashboard/detail/:id"
          element={<Detail />}
        />
        <Route
          path="https://dongeng-pustaka.vercel.app//about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
