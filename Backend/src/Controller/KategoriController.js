import {
  getAllKategoris as modelGetAllKategoris,
  getKategorisById as modelGetKategorisId,
  createKategori as modelCreateKategori,
  updateKategori as modelUpdateKategori,
  deleteKategori as modelDeleteKategori,
  // addUsers
} from "../Models/ModelKategori.js";

export const getAllKategorisController = async (req, res) => {
  try {
    const data = await modelGetAllKategoris();
    res.json({
      message: "GET semua kategoris berhasil!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getKategorisById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await modelGetKategorisId(id);
    if (data.length > 0) {
      res.json({
        message: `GET kategoris dengan ID:${id} berhasil!`,
        data: data,
      });
    } else {
      res.status(404).json({
        message: `Kategori dengan ID:${id} tidak ditemukan.`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createKategoriController = async (req, res) => {
  try {
    const data = await modelCreateKategori(req.body);
    res.json({
      message: "POST kategori berhasil!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateKategoriController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await modelUpdateKategori(id, req.body);
    res.json({
      message: "PUT kategori berhasil!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteKategoriController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await modelDeleteKategori(id);
    res.json({
      message: "DELETE kategori berhasil!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
