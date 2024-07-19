import React, { useEffect, useState } from "react";
import Button from "../../components/Elements/Button/Button";
import { Dropdown } from "flowbite-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Cerita Pilihan",
      link: "/dashboard",
    },
    {
      name: "Tentang",
      link: "#tentang",
    },
    {
      name: "Kontak",
      link: "#kontak",
    },
  ];

  const [isloggin, setIsloggin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsloggin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    alert("Anda Berhasil Logout");
    window.location.href = "/";
  };

  return (
    <nav className="relative z-50">
      <div
        style={{ backgroundColor: "#8DAAE5" }}
        className="flex mx-6 lg:mx-20 rounded-full h-16 items-center justify-between px-10"
      >
        <div className="flex items-center">
          <p className="font-semibold text-white lg:text-[24px] text-lg">
            Dongeng Pustaka
          </p>
          <ul className="lg:flex gap-5 mx-10 text-white hidden">
            {navItems.map((nav, index) => {
              return (
                <a
                  className="hover:text-[#B4F4FA] hover:font-medium"
                  href={nav.link}
                >
                  {nav.name}
                </a>
              );
            })}
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Icon menu burger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden absolute top-[95px] left-0 right-0 mx-8 rounded-md p-4 bg-[#8DAAE5]`}
        >
          {/* mobile view */}
          <ul className="flex flex-col gap-5 mx-4 text-white">
            {navItems.map((nav, index) => {
              return (
                <a
                  className="hover:text-[#B4F4FA] hover:font-medium"
                  href={nav.link}
                >
                  {nav.name}
                </a>
              );
            })}
          </ul>
          <div className="flex gap-3 mx-4 mt-5">
            {!isloggin ? (
              <>
                <Button
                  color="bg-[#B2AFE7]"
                  px="6"
                  py="2"
                  text="Masuk"
                  link="/login"
                />
                <Button
                  border="border-2"
                  color="border-[#B2AFE7]"
                  px="6"
                  py="2"
                  text="Daftar"
                  link="/register"
                />
              </>
            ) : (
              <div>
                <Dropdown
                  className="flex items-center px-4 space-x-2"
                  label={`Halo, ${localStorage.getItem("username")}`}
                  dismissOnClick={false}
                >
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item
                    className="text-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
        <div className="lg:flex gap-3 hidden">
          {!isloggin ? (
            <>
              <Button
                color="bg-[#B2AFE7]"
                px="6"
                py="2"
                text="Masuk"
                link="/login"
              />
              <Button
                border="border-2"
                color="border-[#B2AFE7]"
                px="6"
                py="2"
                text="Daftar"
                link="/register"
              />
            </>
          ) : (
            <div>
              <Dropdown
                label={`Halo, ${localStorage.getItem("username")} \u00A0`}
                dismissOnClick={false}
              >
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item className="text-red-500" onClick={handleLogout}>
                  Logout
                </Dropdown.Item>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
