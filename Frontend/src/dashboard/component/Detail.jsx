import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "../../components/layouts/Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Cookies from "js-cookie";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState([]);
  const [likes, setLikes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  // warna
  const [userLike, setUserLike] = useState(true);
  const [userFav, setUserFav] = useState(true);
  const [nameFav, setNameFav] = useState("Add Favorite");

  console.log(userLike);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(`http://localhost:4000/ceritas/${id}`);
        let data = await res.json();
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/users");
        let { data } = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let [userLogin] = user.filter(
    (us) => us.email == localStorage.getItem("email")
  );

  if (userLogin == undefined) {
    userLogin = 0;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/likes", {
          method: "GET",
          credentials: "include",
        });
        // console.log(`Bearer ${token}`);
        let { data } = await res.json();
        const total = await data.filter((like) => like.cerita_id == id);
        setLikes(total);
        let userLogin;
        if (total.length > 0) {
          if (user) {
            userLogin = await user.filter(
              (us) => us.email == localStorage.getItem("email")
            );
          } else {
            userLogin = 0;
          }

          let [userLog] = userLogin;

          console.log(userLog);
          const diLike = await total.filter(
            (like) => like.user_id == userLog.id
          );
          console.log(diLike);
          if (diLike.length > 0) {
            setUserLike(true);
          } else {
            setUserLike(false);
          }
        } else {
          setUserLike(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/likes", {
          method: "GET",
          credentials: "include",
        });
        let { data } = await res.json();
        const total = data.filter((like) => like.cerita_id == id);
        setLikes(total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/likes", {
          method: "GET",
          credentials: "include",
        });
        let { data } = await res.json();
        const total = data.filter((like) => like.cerita_id == id);
        setLikes(total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userLike]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/favorites", {
          method: "GET",
          credentials: "include",
        });
        let { data } = await res.json();
        const total = data.filter((fav) => fav.id_cerita == id);
        if (total.length > 0) {
          if (user) {
            userLogin = await user.filter(
              (us) => us.email == localStorage.getItem("email")
            );
          } else {
            userLogin = 0;
          }

          let [userLog] = userLogin;
          const diFav = total.filter((fav) => fav.id_user == userLog.id);
          if (diFav.length > 0) {
            setUserFav(true);
            setNameFav("Remove Favorite");
          } else {
            setUserFav(false);
            setNameFav("Add Favorite");
          }
        } else {
          setUserFav(false);
          setNameFav("Add Favorite");
        }
        setFavorites(total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      const { id: user_id } = userLogin;
      const diFav = favorites.filter((fav) => fav.id_user == user_id);
      if (diFav.length > 0) {
        setNameFav("Remove Favorite");
      } else {
        setNameFav("Add Favorite");
      }
    } else {
      setNameFav("Add Favorite");
    }
  }, [userFav, favorites]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/favorites", {
          method: "GET",
          credentials: "include",
        });
        let { data } = await res.json();
        const total = data.filter((fav) => fav.id_cerita == id);
        setFavorites(total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/favorites", {
          method: "GET",
          credentials: "include",
        });
        let { data } = await res.json();
        const total = data.filter((fav) => fav.id_cerita == id);
        setFavorites(total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userFav]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(`http://localhost:4000/ceritas`, {
          method: "GET",
        });
        let data = await res.json();
        setDatas(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("dfsdjfdsjfjdsfsdjijjsdjdsjdsj");
  //   const cekLike = async () => {
  //     let [userLogin] = user.filter(
  //       (us) => us.email == localStorage.getItem("email")
  //     );

  //     if (userLogin == undefined) {
  //       userLogin = 0;
  //     }
  //     const telahDiLike = likes.filter((like) => like.user_id === userLogin.id);
  //     if (telahDiLike.length > 0) {
  //       console.log("hai");
  //       setUserLike(true);
  //     } else {
  //       console.log("hio");
  //       setUserLike(false);
  //     }
  //   };
  //   cekLike();
  // }, []);

  // console.log(userLike);

  const tambahLike = async () => {
    const telahDiLike = likes.filter((like) => like.user_id === userLogin.id);
    if (telahDiLike.length > 0) {
      try {
        let res = await fetch(
          `http://localhost:4000/likes/${telahDiLike[0].id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Gagal menghapus like");
        }
        setUserLike(!userLike);
        console.log("Berhasil menghapus like cerita");
      } catch (error) {
        console.error("Error saat melakukan fetch:", error);
      }
    } else {
      // Pastikan id dan userLogin.id tidak undefined
      if (!id || !userLogin || !userLogin.id) {
        console.error("ID cerita atau ID pengguna tidak tersedia.");
        alert("Untuk melakukan like, Silahkan Login!");
        return;
      }

      const data = JSON.stringify({
        cerita_id: parseInt(id),
        user_id: userLogin.id,
      });

      console.log(data);

      try {
        let res = await fetch("http://localhost:4000/likes", {
          method: "POST",
          credentials: "include",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Gagal menambahkan like");
        }
        setUserLike(!userLike);
        console.log("Berhasil like cerita");
      } catch (error) {
        console.error("Error saat melakukan fetch:", error);
      }
    }
  };

  const addFavorite = async () => {
    const telahDiFav = favorites.filter((fav) => fav.id_user === userLogin.id);
    console.log(telahDiFav);
    if (telahDiFav.length > 0) {
      try {
        let res = await fetch(
          `http://localhost:4000/favorites/${telahDiFav[0].id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Gagal menghapus favorites");
        }
        setUserFav(!userFav);
        console.log("Berhasil menghapus favorites cerita");
      } catch (error) {
        console.error("Error saat melakukan fetch:", error);
      }
    } else {
      if (!id || !userLogin || !userLogin.id) {
        alert("Untuk menyimpan cerita, Silahkan Login!");
        console.error("ID cerita atau ID pengguna tidak tersedia.");
        return;
      }

      const data = JSON.stringify({
        id_cerita: parseInt(id),
        id_user: userLogin.id,
      });

      console.log(data);

      try {
        let res = await fetch("http://localhost:4000/favorites", {
          method: "POST",
          credentials: "include",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Gagal menambahkan like");
        }
        setUserFav(!userFav);
        console.log("Berhasil menyimpan ke Favorite!");
      } catch (error) {
        console.error("Error saat melakukan fetch:", error);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {data.map((data, index) => (
        <>
          <div
            className="h-96 bg-cover bg-center bg-no-repeat w-full"
            style={{
              backgroundImage: `url(${data.banner})`,
              padding: "25px",
            }}
          >
            <Navbar />
          </div>
          <div className="lg:px-32 px-10 py-10 lg:py-0 w-full">
            <div className="absolute top-40">
              <Card img={data.image} />
            </div>
            <div className="flex lg:flex-row flex-col w-full">
              <div className="lg:w-52 hidden lg:flex w-full lg:pt-24 mb-20">
                <div className="flex flex-col gap-3">
                  <button
                    className="w-full rounded-md text-white font-medium h-10"
                    style={{ backgroundColor: "#B2AFE7" }}
                    onClick={() => addFavorite()}
                  >
                    {nameFav}
                  </button>
                  <div className="flex flex-col gap-1">
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                    >
                      <StarIcon sx={{ color: "yellow" }} />
                      {data.rating}
                    </button>
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                      onClick={() => tambahLike()}
                    >
                      <FavoriteIcon
                        sx={{ color: userLike ? "red" : "white" }}
                      />
                      {likes.length}
                      {/* {totalLike} */}
                    </button>
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                      onClick={() => addFavorite()}
                    >
                      <BookmarkIcon
                        sx={{ color: userFav ? "yellow" : "white" }}
                      />
                      {favorites.length}
                      {/* {totalFav} */}
                    </button>

                    <div
                      className="w-full rounded-md p-5"
                      style={{ backgroundColor: "#8DAAE5" }}
                    >
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">Jenis</h5>
                        <p className="text-sm text-gray-100">Cerita Rakyat</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">Asal</h5>
                        <p className="text-sm text-gray-100">{data.asal}</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">
                          Karakter
                        </h5>
                        <p className="text-sm text-gray-100">{data.karakter}</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">
                          Sinopsis
                        </h5>
                        <p className="text-sm text-gray-100">{data.sinopsis}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-4/5 w-full lg:pl-16 lg:py-10">
                <h3 className="text-slate-700 font-semibold mb-4 text-xl">
                  Cerita Rakyat: {data.judul}
                </h3>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: data.isi }}
                ></div>
              </div>
              <div className="lg:w-52 lg:hidden w-full lg:pt-24 pt-12 mb-20">
                <div className="flex flex-col gap-3">
                  <button
                    className="w-full rounded-md text-white font-medium h-10"
                    style={{ backgroundColor: "#B2AFE7" }}
                    onClick={() => addFavorite()}
                  >
                    {nameFav}
                  </button>
                  <div className="flex flex-col gap-1">
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                    >
                      <StarIcon sx={{ color: "yellow" }} />
                      {data.rating}
                    </button>
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                      onClick={() => tambahLike()}
                    >
                      <FavoriteIcon
                        sx={{ color: userLike ? "red" : "white" }}
                      />
                      {likes.length}
                      {/* {totalLike} */}
                    </button>
                    <button
                      className="w-full rounded-md flex justify-start px-5 gap-12 items-center text-white font-medium h-10"
                      style={{ backgroundColor: "#8DAAE5" }}
                      onClick={() => addFavorite()}
                    >
                      <BookmarkIcon
                        sx={{ color: userFav ? "yellow" : "white" }}
                      />
                      {favorites.length}
                      {/* {totalFav} */}
                    </button>

                    <div
                      className="w-full rounded-md p-5"
                      style={{ backgroundColor: "#8DAAE5" }}
                    >
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">Jenis</h5>
                        <p className="text-sm text-gray-100">Cerita Rakyat</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">Asal</h5>
                        <p className="text-sm text-gray-100">{data.asal}</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">
                          Karakter
                        </h5>
                        <p className="text-sm text-gray-100">{data.karakter}</p>
                      </div>
                      <div className="flex flex-col gap-3 mb-5">
                        <h5 className="text-white text-sm font-bold">
                          Sinopsis
                        </h5>
                        <p className="text-sm text-gray-100">{data.sinopsis}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-slate-800 text-3xl font-medium">
                Rekomendasi Lainnya:
              </h1>
              <div className="grid grid-cols-2 gap-5 md:grid md:grid-cols-3 lg:gap-10 lg:grid lg:grid-cols-4 lg:px-20 px-5 py-10">
                {datas.map((data, index) => (
                  <Link
                    key={index}
                    to={`/dashboard/detail/${data.id}`}
                    className="cursor-pointer"
                  >
                    <Card
                      judul={data.judul}
                      img={data.image}
                      rating={data.rating}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}

      <Footer />
    </>
  );
};

export default Detail;
