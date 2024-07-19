import React from "react";
import Button from "../Elements/Button/Button";

const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto bg-[#8DAAE5] rounded-full">
          <div className="flex justify-between items-center text-white px-6 py-3">
            <nav className="flex items-center justify-between space-x-8">
              <h1 className="text-3xl font-bold">Dongeng Pustaka</h1>
              <ul className="flex items-center space-x-6">
                <li>
                  <a href="/" className="text-base">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="/cerita-pilihan" className="text-base">
                    Cerita Pilihan
                  </a>
                </li>
                <li>
                  <a href="/tentang" className="text-base">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="/kontak" className="text-base">
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-x-2">
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
