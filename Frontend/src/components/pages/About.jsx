import React from "react";
import Navbar from "../../dashboard/component/Navbar";
import Button from "../Elements/Button/Button";
import WhyUs from "../layouts/WhyUs";
import Footer from "../../components/layouts/Footer";

const About = () => {
  return (
    <>
      {/* hero */}
      <section
        className="bg-cover bg-center bg-blend-darken relative"
        style={{
          backgroundImage: "url(/img/about.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
          paddingTop: "25px",
        }}
      >
        {/* navbar */}
        <Navbar />
        <div className="container mx-auto px-8 mt-[60px] lg:mt-[100px]">
          <div className="text-white">
            <h1 className="text-6xl font-bold max-w-5xl mb-3">
              Selamat datang di Cerita Rakyat Indonesia
            </h1>
            <p className="text-[20px] max-w-5xl mb-4">
              Tujuan utama untuk menemukan kisah-kisah kaya dan beragam
              yang telah diwariskan dari generasi ke generasi di Indonesia. Misi
              kami adalah untuk melestarikan dan berbagi kebijaksanaan, budaya,
              dan tradisi abadi yang terkandung dalam cerita-cerita ini.
            </p>
            <Button
              color="bg-[#B2AFE7]"
              width="w-52"
              px="7"
              py="3"
              text="Lihat Selengkapnya"
            />
          </div>
        </div>
      </section>

      {/* kenapa kami? */}
      <WhyUs />

      {/* tentang kami */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
