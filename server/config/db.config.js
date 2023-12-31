// Packages
import mysql from 'mysql';

// Create Connection
const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'messenger',
});

export default db;