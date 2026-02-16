import http from "http";

// let posts = [
//   { id: 1, titulo: "Primeiro post", curtidas: 0 },
//   { id: 2, titulo: "Segundo post", curtidas: 0 }
// ];
let posts = [];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/posts") {

    if (!posts || posts.length === 0) {
        res.statusCode = 200;
        res.end(JSON.stringify({
        mensagem: "Nenhum post encontrado. Use o comando criaposts para criar o primeiro.",
        total: 0,
        posts: []
        }));
        return;
    }

    res.statusCode = 200;
    res.end(JSON.stringify({
        total: posts.length,
        posts
    }));
    return;
    }


  if (req.method === "POST" && req.url === "/posts") {
    let body = "";
    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      const novo = JSON.parse(body);
      novo.id = posts.length + 1;
      novo.curtidas = 0;
      posts.push(novo);

      res.end(JSON.stringify(novo));
    });
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

server.listen(3000, () => {
  console.log("🚀 Mock server rodando em http://localhost:3000");
});
