import db from "../Config/Database.js";

export const getAllCeritas = async () => {
  try {
    const SQLQuery = "SELECT * FROM ceritas ORDER BY created_at DESC";
    const [rows] = await db.execute(SQLQuery);
    return rows;
  } catch (error) {
    console.error("Error pada proses getAllCeritas:", error);
    throw error;
  }
};

export const getCeritasById = async (id) => {
  try {
    const SQLQuery = "SELECT * FROM ceritas WHERE id = ?";
    const [rows] = await db.execute(SQLQuery, [id]);
    return rows;
  } catch (error) {
    console.error("Error pada proses getCeritasUsers:", error);
    throw error;
  }
};

export const createCerita = async (body) => {
  try {
    const {
      judul,
      sinopsis,
      kategori_id,
      isi,
      image,
      banner,
      rating,
      asal,
      karakter,
    } = body;
    const SQLQuery =
      "INSERT INTO ceritas (judul, kategori_id, sinopsis, isi, image, banner, rating, asal, karakter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const [rows] = await db.execute(SQLQuery, [
      judul,
      kategori_id,
      sinopsis,
      isi,
      image,
      banner,
      rating,
      asal,
      karakter,
    ]);
    return rows;
  } catch (error) {
    console.error("Error pada proses createCerita:", error);
    throw error;
  }
};

export const updateCerita = async (id, body) => {
  try {
    const {
      judul,
      sinopsis,
      kategori_id,
      isi,
      image,
      banner,
      rating,
      asal,
      karakter,
    } = body;
    const SQLQuery =
      "UPDATE ceritas SET judul = ?, kategori_id = ?, sinopsis = ?, isi = ?, image = ?, banner = ?, rating = ?, asal = ?, karakter = ? WHERE id = ?";
    const [rows] = await db.execute(SQLQuery, [
      judul,
      kategori_id,
      sinopsis,
      isi,
      image,
      banner,
      rating,
      asal,
      karakter,
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error pada proses updateCerita:", error);
    throw error;
  }
};

export const deleteCerita = async (id) => {
  try {
    const SQLQuery = "DELETE FROM ceritas WHERE id = ?";
    const [rows] = await db.execute(SQLQuery, [id]);
    return rows;
  } catch (error) {
    console.error("Error pada proses deleteCerita:", error);
    throw error;
  }
};
