import db from "../Config/Database.js";

export const getAllKategoris = async () => {
  try {
    const SQLQuery = "SELECT * FROM kategoris";
    const [rows] = await db.execute(SQLQuery);
    return rows;
  } catch (error) {
    console.error("Error pada proses getAllKategoris:", error);
    throw error;
  }
};

export const getKategorisById = async (id) => {
  try {
    const SQLQuery = "SELECT * FROM kategoris WHERE id = ?";
    const [rows] = await db.execute(SQLQuery, [id]);
    return rows;
  } catch (error) {
    console.error("Error pada proses getKategorisUsers:", error);
    throw error;
  }
};

export const createKategori = async (body) => {
  try {
    const { name } = body;
    const SQLQuery = "INSERT INTO kategoris (name) VALUES (?)";
    const [rows] = await db.execute(SQLQuery, [name]);
    return rows;
  } catch (error) {
    console.error("Error pada proses createKategori:", error);
    throw error;
  }
};

export const updateKategori = async (id, body) => {
  try {
    const { name } = body;
    const SQLQuery = "UPDATE kategoris SET name = ? WHERE id = ?";
    const [rows] = await db.execute(SQLQuery, [name, id]);
    return rows;
  } catch (error) {
    console.error("Error pada proses updateKategori:", error);
    throw error;
  }
};

export const deleteKategori = async (id) => {
  try {
    const SQLQuery = "DELETE FROM kategoris WHERE id = ?";
    const [rows] = await db.execute(SQLQuery, [id]);
    return rows;
  } catch (error) {
    console.error("Error pada proses deleteKategori:", error);
    throw error;
  }
};
