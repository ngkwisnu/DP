import {
  getAllUsers as modelGetAllUsers,
  getUsersById as modelGetUsersId,
  findByEmail as modelFindByEmail,
  createUser,
} from "../Models/ModelUsers.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getAllUsersController = async (req, res) => {
  try {
    const data = await modelGetAllUsers();
    res.json({
      message: "GET semua users berhasil!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await modelGetUsersId(id);
    if (data.length > 0) {
      res.json({
        message: `GET users dengan ID:${id} berhasil!`,
        data: data,
      });
    } else {
      res.status(404).json({
        message: `Users dengan ID:${id} tidak ditemukan.`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const generateJwt = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "1d",
  });
};

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Validasi
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Isi data dengan benar");
    }

    if (password.length < 6) {
      res.status(400);
      throw new Error("Password minimal 6 karakter");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400);
      throw new Error("Format email tidak valid");
    }

    // Periksa apakah email sudah digunakan
    const userExists = await modelFindByEmail(email);

    if (userExists) {
      res.status(400);
      throw new Error("Email pengguna sudah ada");
    }

    // Buat pengguna baru
    const newUser = await createUser({ username, email, password });

    // Generate token JWT
    const token = generateJwt(newUser.id);

    // Kirim cookie HTTP-only
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 hari
      sameSite: "none",
      secure: true,
    });

    // Kirim respons
    return res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      image: newUser.image,
      token,
    });
  } catch (error) {
    // Tangani kesalahan
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Validasi
    if (!email || !password) {
      res.status(400);
      throw new Error("Email atau Password harus diisi");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400);
      throw new Error("Format email tidak valid");
    }

    // Cari email
    const userExist = await modelFindByEmail(email);
    if (!userExist) {
      res.status(400);
      throw new Error("User tidak ditemukan, registrasi terlebih dahulu");
    }

    // Compare password
    const passwordIsCorrect = await bcrypt.compare(
      password,
      userExist.password
    );
    if (!passwordIsCorrect) {
      res.status(400);
    }

    // Generate token
    const token = generateJwt(userExist.id);

    // Kirim cookie HTTP-only
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 hari
      sameSite: "none",
      secure: true,
    });

    // Kirim respons
    return res.status(201).json({
      id: userExist.id,
      username: userExist.username,
      email: userExist.email,
      image: userExist.image,
      token,
    });
  } catch (error) {
    // Tangani kesalahan
    console.log(error);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    // Hapus cookie dengan nama 'token'
    res.clearCookie("token", { path: "/" });

    // Kirim respons logout berhasil
    return res.status(200).json({ message: "Logout berhasil" });
  } catch (error) {
    // Tangani kesalahan
    next(error);
  }
};

export const loginStatus = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json(false);
  }

  // jika ada token
  const verified = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);

  if (verified) {
    return res.json(true);
  }

  return res.json(false);
};
