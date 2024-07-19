import {
    getAllSearch as modelGetAllSearch,
    searchAllKategori as modelSearchAllKategori,
    searchByRating as modelSearchByRating
} from"../Models/ModelSearch.js"

export const getAllSearchController = async (req, res) => {
    const judul = req.query.judul;
    try {
        const results = await modelGetAllSearch(judul);
        if (results.length === 0) {
            return res.status(404).json({ error: `Cerita dengan judul:${judul} tidak ditemukan` });
        }
        res.json(results);
    } catch (error) {
        console.error("Error dalam search controller:", error);
        res.status(500).json({ error: 'Terjadi kesalahan saat melakukan pencarian' });
    }
}

export const searchAllKategoriController = async (req, res) => {
    const kategori_id = req.params.kategori_id; 
    console.log("Kategori ID:", kategori_id);
    try {
        const results = await modelSearchAllKategori(kategori_id);
        if (results.length === 0) {
            return res.status(404).json({ error: `Cerita dengan kategori:${kategori_id} tidak ditemukan` });
        }
        res.json(results);
    } catch (error) {
        console.error("Error dalam searchAllKategori controller:", error);
        res.status(500).json({ error: 'Terjadi kesalahan saat melakukan pencarian' });
    }
}

export const searchByRatingController = async (req, res) => {
    const rating = req.params.rating;
    try {
        const results = await modelSearchByRating(rating);
        if (results.length === 0) {
            return res.status(404).json({ error: `Cerita dengan rating:${rating} tidak ditemukan` });
        }
        res.json(results);
    } catch (error) {
        console.error("Error dalam searchByRating controller:", error);
        res.status(500).json({ error: 'Terjadi kesalahan saat melakukan pencarian' });
    }
}