// src/lib/db.ts
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost" as string,
  user: "root" as string,
  password: "root" as string,
  database: "blogdb" as string,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
