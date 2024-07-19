import {
    getAllFavorite as modelGetAllFavorite,
    getFavoriteById as modelGetFavoriteId,
    createFavorite as modelCreateFavorite,
    updateFavorite as modelUpdateFavorite,
    deleteFavorite as modelDeleteFavorite,
    // addUsers
} from "../Models/ModelFavorite.js";

export const getAllFavoriteController = async(req, res) => {
    try {
        const data = await modelGetAllFavorite();
        res.json({
            message: "GET semua favorite berhasil!",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const getFavoriteByIdController = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await modelGetFavoriteId(id);
        if (data.length > 0) {
            res.json({
                message: `GET favorite dengan ID:${id} berhasil!`,
                data: data,
            });
        } else {
            res.status(404).json({
                message: `favorite dengan ID:${id} tidak ditemukan.`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const createFavoriteController = async(req, res) => {
    try {
        const data = await modelCreateFavorite(req.body);
        res.json({
            message: "POST favorite berhasil!",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const updateFavoriteController = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await modelUpdateFavorite(id, req.body);
        res.json({
            message: "PUT favorite berhasil!",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const deleteFavoriteController = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await modelDeleteFavorite(id);
        res.json({
            message: "DELETE favorite berhasil",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}