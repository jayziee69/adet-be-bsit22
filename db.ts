import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin123',
    database: 'bsit_22',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

export default pool;
