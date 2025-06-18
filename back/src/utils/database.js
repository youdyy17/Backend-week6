import mysql from 'mysql2/promise';

// Create the connection to database
const pool = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'backendweek6',
  password: '1234',    
});
export default pool;