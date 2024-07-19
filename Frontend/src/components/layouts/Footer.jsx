import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-[#8DAAE5] text-white mt-24 py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1  lg:flex lg:justify-between lg:items-center gap-8">
          <div className="col-span-2 lg:col-span-1 lg:w-3/6">
            <div className="flex items-center gap-4 mb-3">
              <img src="../../src/img/logo.png" className="w-16" alt="" />
              <h1 className="text-3xl font-bold mb-2">Dongeng Pustaka</h1>
            </div>
            <p className="max-w-lg mb-4">
              Kami memberikan cerita yang menginspirasi dan menghibur untuk
              menemani hari hari anda dimanapun berada.
            </p>
            <ul className="flex gap-x-6 mb-5">
              <li>
                <InstagramIcon sx={{ color: "white" }} />
              </li>
              <li>
                <YouTubeIcon sx={{ color: "white" }} />
              </li>
              <li>
                <LinkedInIcon sx={{ color: "white" }} />
              </li>
            </ul>
            <h5 className="text-[13px]">Copyright © 2024 dongengpustaka.com</h5>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/6">
            <div>
              <h3 className="text-[20px] font-semibold mb-2">Tentang</h3>
              <ul className="space-y-2">
                <li>Tentang Kami</li>
                <li>Kebijakan Privasi</li>
                <li>Kontak</li>
                <li>Bantuan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold mb-2">Cerita</h3>
              <ul className="space-y-2">
                <li>Cerita Rakyat</li>
                <li>Cerita Dongeng</li>
                <li>Cerita Horror</li>
                <li>Cerita Fabel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold mb-2">Privacy</h3>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
