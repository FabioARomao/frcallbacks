import { pool } from "./db.js";

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      titulo TEXT NOT NULL,
      curtidas INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);

  console.log("✅ Tabela criada");
  process.exit();
}

init();
