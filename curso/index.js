import http from "http";
import { pool } from "../backend/src/db";

let posts = [];

const server = http.createServer(async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  // =====================
  // GET POSTS
  // =====================

    if (req.method === "GET" && req.url === "/posts") {

    const result = await pool.query("SELECT * FROM posts ORDER BY id");

    if (result.rows.length === 0) {
        res.end(JSON.stringify({
        mensagem: "Nenhum post encontrado"
        }));
        return;
    }

    res.end(JSON.stringify(result.rows));
    return;
    }


  // =====================
  // CREATE POST
  // =====================
    if (req.method === "POST" && req.url === "/posts") {

    let body = "";
    req.on("data", c => body += c);

    req.on("end", async () => {
        const data = JSON.parse(body);

        const result = await pool.query(
        "INSERT INTO posts (titulo) VALUES ($1) RETURNING *",
        [data.titulo]
        );

        res.end(JSON.stringify(result.rows[0]));
    });

    return;
    }


  // =====================
  // DELETE POST
  // =====================
    if (req.method === "DELETE" && req.url.startsWith("/posts/")) {

    const id = req.url.split("/")[2];

    await pool.query("DELETE FROM posts WHERE id=$1", [id]);

    res.end(JSON.stringify({ ok: true }));
    return;
    }


  // =====================
  // FALLBACK
  // =====================
  res.statusCode = 404;
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));

});

server.listen(3000, () => {
  console.log("🚀 Mock server rodando em http://localhost:3000");
});
