import React, { useEffect, useState } from "react";
import Header from "./dashboard/component/Navbar";
import Button from "./components/Elements/Button/Button";
import Card from "./components/pages/Card";
import Footer from "./components/layouts/Footer";
import CardProduct from "./components/Fragments/CardProduct";

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/ceritas");
        const { data } = await res.json();

        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const latestData = sortedData.slice(0, 4);

        setDatas(latestData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {/* hero */}
      <section
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/img/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "730px",
          paddingTop: "26px",
        }}
      >
        {/* navbar */}
        <Header />
        <div className="container mx-auto mt-[60px] lg:mt-[155px]">
          <div className="text-center p-4 lg:p-10 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold lg:max-w-5xl mx-auto mb-3">
              Temukan Kisah Menakjubkan di Koleksi Buku Cerita Terbaru Kami!
            </h1>
            <p className="text-[18px] max-w-3xl mx-auto mb-6">
              Nikmati petualangan seru dan inspiratif dari koleksi buku terbaru
              kami. Temukan dunia penuh imajinasi dan keajaiban untuk semua
              usia. Mulai perjalanan membaca Anda dan temukan keajaiban di
              setiap cerita!
            </p>
            <Button color="bg-[#B2AFE7]" px="12" py="3" width="w-1/6" text="Mulai Sekarang" />
          </div>
        </div>
      </section>

      {/* cerita */}
      <section>
        <div className="container mx-auto mt-24 lg:mt-[107px] lg:px-16">
          <div className="flex flex-col px-8">
            <h1 className="text-4xl font-semibold">Koleksi Cerita Pilihan</h1>
            <p>
              Kami menyediakan rekomendasi kumpulan cerita yang menginspirasi
              dan menghibur untuk anda
            </p>
            <Card />
          </div>
        </div>
      </section>

      {/* tentang */}
      <section className="bg-[#F2F2F2]" id="tentang">
        <div className="container mx-auto mt-20 lg:mt-[107px]">
          <div className="flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-28 space-x-8">
            <img className="p-4" src="/img/about.png" alt="" />
            <div className="p-2">
              <h1 className="text-3xl lg:text-5xl font-bold mb-3">
                Lebih Dari 100+ Pengguna Telah Membaca di Dongeng Pustaka{" "}
              </h1>
              <p className="mb-4 lg:mb-6">
                Dongeng Pustaka telah mencapai tonggak pencapaian baru dengan
                lebih dari 100 pengguna yang telah menikmati cerita-cerita
                menarik kami. Ini adalah bukti popularitas dan kualitas konten
                yang kami sajikan. Terima kasih kepada semua pembaca setia kami
                yang telah membantu kami mencapai pencapaian ini. Mari terus
                menjelajahi dunia dongeng bersama di Dongeng Pustaka!
              </p>
              <Button
                color="bg-[#B2AFE7]"
                px="6"
                py="2"
                text="Jelajahi Sekarang"
                link="/about"
              />
            </div>
          </div>
        </div>
      </section>

      {/* update cerita */}
      <section>
        <div className="container mx-auto mt-20 lg:mt-[107px] mb-10 px-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold">Cerita Baru Terupdate</h1>
            <p>
              Kami menyediakan rekomendasi kumpulan cerita yang menginspirasi
              dan menghibur untuk anda
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {datas.map((data, id) => (
                <CardProduct
                  key={id}
                  border="border-2 border-[#B4F4FA]"
                  width="w-full"
                >
                  <CardProduct.Header image={data.image} w="full" h="72" />
                  <CardProduct.Body
                    judul={data.judul}
                    sinopsis={data.sinopsis}
                  />
                </CardProduct>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
