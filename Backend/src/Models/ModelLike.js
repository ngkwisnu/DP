import db from "../Config/Database.js";

export const getAllLike = async() => {
    try {
        const SQLQuery = 'SELECT * FROM likes';
        const [rows] = await db.execute(SQLQuery);
        return rows;
    } catch (error) {
        console.error('Error pada proses getAllLike:', error);
        throw error;
    }
}

export const getLikeById = async(id) => {
    try {
        const SQLQuery = 'SELECT * FROM likes WHERE id = ?';
        const [rows] = await db.execute(SQLQuery, [id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses getLikeById:', error);
        throw error;
    }
}

export const createLike = async(body) => {
    try {
        const {cerita_id, user_id} = body;
        const SQLQuery = "INSERT INTO likes (cerita_id, user_id) VALUES (?, ?)";
        const [rows] = await db.execute(SQLQuery, [cerita_id, user_id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses createLike:', error);
        throw error;
    }
}

export const updateLike = async(id, body) => {
    try {
        const {cerita_id, user_id} = body;
        const SQLQuery = "UPDATE likes SET cerita_id = ?, user_id = ? WHERE id = ?";
        const [rows] = await db.execute(SQLQuery, [cerita_id, user_id, id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses updateLike:', error);
        throw error;
    }
}

export const deleteLike = async(id) => {
    try {
        const SQLQuery = "DELETE FROM likes WHERE id = ?";
        const [rows] = await db.execute(SQLQuery, [id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses deleteLike:', error);
        throw error;
    }
}