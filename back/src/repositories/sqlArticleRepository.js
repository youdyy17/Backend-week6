//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//
import pool from '../utils/database.js';


// Get all articles
export async function getArticles() {
    // TODO
    const [rows] = await pool.query(`
        SELECT articles.*, journalists.name AS journalist
        FROM articles
        JOIN journalists ON articles.journalist_id = journalists.id;
        `);
    return rows;
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    const [rows] = await pool.query(`
        SELECT articles.*, journalists.name AS journalist
        FROM articles
        LEFT JOIN journalists ON articles.journalist_id = journalists.id
        WHERE articles.id = ?
        `, [id]);
    return rows[0];
}

// Create a new article
export async function createArticle(article) {
    // TODO
    const { title, content, journalist_id } = article;
    const [result] = await pool.query(
        'INSERT INTO articles (title, content, journalist) VALUES (?, ?, ?)',
        [title, content, journalist_id]
    );
    return { id: result.insertId, ...article };
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    const { title, content, journalist_id } = updatedData;
    await pool.query(
        "UPDATE articles SET title = ?, content = ?, journalist = ? WHERE id = ?",
        [title, content, journalist_id, id]
    );
    return { id, ...updatedData };

}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    await pool.query("DELETE FROM articles WHERE id = ?", [id]);
    return { message: 'Article deleted successfully' };

}
