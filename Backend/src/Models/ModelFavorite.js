import db from "../Config/Database.js";

export const getAllFavorite = async() => {
    try {
        const SQLQuery = 'SELECT * FROM favorites';
        const [rows] = await db.execute(SQLQuery);
        return rows;
    } catch (error) {
        console.error('Error pada proses getAllFavorite', error);
        throw error;
    }
}

export const getFavoriteById = async(id) => {
    try {
        const SQLQuery = 'SELECT * FROM favorites WHERE id = ?';
        const [rows] = await db.execute(SQLQuery, [id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses getFavoriteById', error);
        throw error;
    }
}

export const createFavorite = async(body) => {
    try {
        const {id_cerita, id_user} = body;
        const SQLQuery = "INSERT INTO favorites (id_cerita, id_user) VALUES (?, ?)";
        const [rows] = await db.execute(SQLQuery, [id_cerita, id_user]);
        return rows;
    } catch (error) {
        console.error('Error pada proses createLike:', error);
        throw error;
    }
}

export const updateFavorite = async(id, body) => {
    try {
        const {id_cerita, id_user} = body;
        const SQLQuery = "UPDATE favorites SET id_cerita = ?, id_user = ? WHERE id = ?";
        const [rows] = await db.execute(SQLQuery, [id_cerita, id_user, id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses updateLike:', error);
        throw error;
    }
}

export const deleteFavorite = async(id) => {
    try {
        const SQLQuery = "DELETE FROM favorites WHERE id = ?";
        const [rows] = await db.execute(SQLQuery, [id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses deleteLike:', error);
        throw error;
    }
}