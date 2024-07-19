import db from "../Config/Database.js"

export const getAllSearch = async (judul) => {
    try {
        let SQLQuery = "SELECT * FROM ceritas";
        const params = [];

        if (judul) {
            SQLQuery += " WHERE judul LIKE ?";
            const searchQuery = `%${judul}%`;
            params.push(searchQuery);
        }

        console.log("Executing query:", SQLQuery, params); 
        const [rows] = await db.execute(SQLQuery, params);
        return rows;
    } catch (error) {
        console.error("Error pada proses getAllSearch:", error);
        throw error;
    }
}

export const searchAllKategori = async (kategori_id) => {
    try {
        const SQLQuery = `
            SELECT ceritas.*, kategoris.name 
            FROM ceritas 
            JOIN kategoris ON ceritas.kategori_id = kategoris.id 
            WHERE ceritas.kategori_id = ?
        `;
        const [rows] = await db.execute(SQLQuery, [kategori_id]);
        return rows;
    } catch (error) {
        console.error("Error pada proses searchAllKategori:", error);
        throw error;
    }    
}

export const searchByRating = async (rating) => {
    try {
        const SQLQuery = `
            SELECT *
            FROM ceritas
            WHERE rating = ?
        `;
        const [rows] = await db.execute(SQLQuery, [rating]);
        return rows;
    } catch (error) {
        console.error("Error pada proses searchByRating:", error);
        throw error;
    }    
}