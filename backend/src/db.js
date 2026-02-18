import 'dotenv/config';
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "frcallbacks",
  password: process.env.DB_PASS || "frcallbacks",
  database: process.env.DB_NAME || "frcallbacks",
});

pool.on("connect", () => {
  console.log("✅ Conectado ao PostgreSQL");
});
