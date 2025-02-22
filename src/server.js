// import usando o type module
import http from "node:http";

// import usando o type commom
// const http = require('http');

const users = [];
let id = 0;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }
  if (method === "POST" && url === "/users") {
    users.push({
      id: id++,
      name: "Lohran Mendes",
      email: "lohranfm@gmail.com",
    });
    return res.writeHead(200, "Created!").end();
  }
  return res.writeHead(404, "Not Found").end();
});

server.listen(3000);
