import mysql from 'mysql2/promise';
import { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } from '../constants.js';

const connection = async () => {
  try {
    const conn = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
    console.log('connected');
    return conn;
  } catch (err) {
    console.log('error:', err);
  }
};

export default connection;
