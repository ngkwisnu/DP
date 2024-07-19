import db from "../Config/Database.js";
import bcrypt from "bcrypt";

export const getAllUsers = async () => {
  try {
    const SQLQuery = "SELECT * FROM users";
    const [rows] = await db.execute(SQLQuery);
    return rows;
  } catch (error) {
    console.error("Error pada proses getAllUsers:", error);
    throw error;
  }
};

export const getUsersById = async (id) => {
  try {
    const SQLQuery = "SELECT * FROM users WHERE id = ?";
    const [rows] = await db.execute(SQLQuery, [id]);
    return rows;
  } catch (error) {
    console.error("Error pada proses getAllUsers:", error);
    throw error;
  }
};

export const findByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return rows[0];
};

export const createUser = async (user) => {
  const { username, email, password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const photoUrl =
    "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.svg";
  const [result] = await db.query(
    "INSERT INTO users (username, email, password, image) VALUES (?, ?, ?, ?)",
    [username, email, hashedPassword, photoUrl]
  );
  return {
    id: result.insertId,
    username,
    email,
    password: hashedPassword,
    image: photoUrl,
  };
};
