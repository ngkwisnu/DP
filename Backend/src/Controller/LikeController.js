import {
    getAllLike as modelGetAllLike,
    getLikeById as modelGetLikeId,
    createLike as modelCreateLike,
    updateLike as modelUpdateLike,
    deleteLike as modelDeleteLike,
    // addUsers
} from "../Models/ModelLike.js";

export const getAllLikeController = async(req, res) => {
    try {
        const data = await modelGetAllLike();
        res.json({
            message: "GET semua like berhasil!",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const getLikeByIdController = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await modelGetLikeId(id);
        if (data.length > 0) {
            res.json({
                message: `GET like dengan ID:${id} berhasil!`,
                data: data,
            });
        } else {
            res.status(404).json({
                message: `like dengan ID:${id} tidak ditemukan.`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const createLikeController = async(req, res) => {
    try {
        const data = await modelCreateLike(req.body);
        res.json({
            message: "POST like berhasil!",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const updateLikeController = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await modelUpdateLike(id, req.body);
        res.json({
            message: "PUT like berhasil!",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const deleteLikeController = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await modelDeleteLike(id);
        res.json({
            message: "DELETE like berhasil",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}