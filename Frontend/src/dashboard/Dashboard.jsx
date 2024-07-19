import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "../components/layouts/Footer";
import { Link } from "react-router-dom";
import { dongengNusantara } from "./data";
import StarIcon from "@mui/icons-material/Star";
import { Dropdown } from "flowbite-react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import InputSearch from "./component/InputSearch";
import { SearchIcon } from "@heroicons/react/solid";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [kategoris, setKategoris] = useState([]);
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/ceritas");
        let { data } = await res.json();
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/kategoris");
        let { data } = await res.json();
        setKategoris(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const apiUrl = "http://localhost:4000/search";

    // Objek untuk menyimpan parameter-parameter query
    const params = new URLSearchParams();
    params.append("judul", search);

    // Gabungkan parameter dengan URL
    const url = `${apiUrl}?${params.toString()}`;

    // Buat permintaan fetch dengan URL yang sudah dibangun
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDatas(data);
      })
      .catch((error) => {
        // Tangani kesalahan jika ada
        console.error("Fetch error:", error);
      });
  }, [search]);

  const changeKategori = (value) => {
    setKategori(value);
  };

  useEffect(() => {
    const changeData = async () => {
      try {
        if (kategori != "Semua") {
          const [idKategori] = kategoris.filter(
            (data) => data.NAME == kategori
          );
          let res = await fetch("http://localhost:4000/ceritas");
          let { data } = await res.json();
          const cerita = data.filter((d) => d.kategori_id == idKategori.id);
          console.log(cerita);
          setDatas(cerita);
        } else {
          let res = await fetch("http://localhost:4000/ceritas");
          let { data } = await res.json();
          console.log(data);
          setDatas(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    changeData();
  }, [kategori]);

  const searchRating = (value) => {
    console.log("testetstets");
    setRating(value);
    console.log(rating);
  };

  useEffect(() => {
    const ratingData = async () => {
      try {
        if (rating == "5 - 4") {
          let res = await fetch("http://localhost:4000/ceritas");
          let { data } = await res.json();
          const cerita = data.filter((d) => d.rating == 5 || d.rating == 4);
          console.log(cerita);
          setDatas(cerita);
        } else if (rating == "3 - 1") {
          let res = await fetch("http://localhost:4000/ceritas");
          let { data } = await res.json();
          const cerita = data.filter(
            (d) => d.rating == 3 || d.rating == 2 || d.rating == 1
          );
          console.log(cerita);
          setDatas(cerita);
        } else {
          let res = await fetch("http://localhost:4000/ceritas");
          let { data } = await res.json();
          console.log(data);
          setDatas(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    ratingData();
  }, [rating]);

  // console.log(datas);

  // Contoh endpoint API

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-20">
        <div className="lg:flex items-center justify-center lg:gap-x-6">
          <div className="flex justify-center items-center gap-x-4 border border-gray-300 w-full rounded-md px-3 lg:w-3/5">
            <input
              type="text"
              className="flex-1 outline-none border-none"
              name="search"
              placeholder="Cari Cerita..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
          </div>
          <div className="lg:flex-row flex flex-row gap-2 justify-center items-center gap-x-4 mt-2">
            <Dropdown
              label={
                <div className="flex items-center text-[#282828] px-3">
                  <span className="mr-2">
                    {kategori == "" ? "Kategori" : kategori}
                  </span>
                  <ChevronDownIcon className="w-5 h-5" />
                </div>
              }
              dismissOnClick={false}
            >
              <Dropdown.Item
                className="p-4"
                onClick={() => changeKategori("Cerita Rakyat")}
              >
                Cerita Rakyat
              </Dropdown.Item>
              <Dropdown.Item
                className="p-4"
                onClick={() => changeKategori("Dongeng")}
              >
                Dongeng
              </Dropdown.Item>
              <Dropdown.Item
                className="p-4"
                onClick={() => changeKategori("Semua")}
              >
                Semua
              </Dropdown.Item>
            </Dropdown>
            <Dropdown
              label={
                <div className="flex items-center text-[#282828] px-3">
                  <span className="mr-2">
                    {rating == "" ? "Rating" : rating}
                  </span>
                  <ChevronDownIcon className="w-5 h-5" />
                </div>
              }
              dismissOnClick={false}
            >
              <Dropdown.Item onClick={() => searchRating("5 - 4")}>
                <StarIcon sx={{ color: "yellow" }} className="p-4" />5 - 4
              </Dropdown.Item>
              <Dropdown.Item onClick={() => searchRating("3 - 1")}>
                <StarIcon sx={{ color: "yellow" }} className="p-4" />3 - 1
              </Dropdown.Item>
              <Dropdown.Item onClick={() => searchRating("Semua")}>
                <StarIcon sx={{ color: "yellow" }} className="p-4" />
                Semua
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-3 lg:gap-10 lg:grid lg:grid-cols-5 lg:px-20 px-5 py-10">
        {datas.map((data, index) => (
          <Link key={index} to={`detail/${data.id}`} className="cursor-pointer">
            <Card judul={data.judul} img={data.image} rating={data.rating} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
