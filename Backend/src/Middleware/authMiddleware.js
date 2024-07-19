import db from "../Config/Database.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
      res.status(401);
      throw new Error("User not authorized, please login");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);

    const [rows] = await db.execute(
      "SELECT id, username, email, bio, image, phone FROM users WHERE id = ?",
      [verified.id]
    );

    if (rows.length === 0) {
      res.status(404);
      throw new Error("User tidak ditemukan");
    }

    const user = rows[0];

    req.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      bio: user.bio,
      image: user.image,
      phone: user.phone,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
