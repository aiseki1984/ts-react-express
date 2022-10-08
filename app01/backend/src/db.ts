import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'test',
});
