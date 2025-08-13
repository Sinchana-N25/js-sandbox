const http = require("http");

// Create a server
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

  response.write("Welcome to Neon Albums!\n\n");
  response.write("=============\n");
  response.write("LATE NITE RECORDS\n");
  response.write("=============\n\n");

  response.write("ROCK\n");
  response.write("1. Smells like teen spirit\n\n");

  response.write("POP\n");
  response.write("1. ivy\n");
  response.write("2. anti-hero\n");
  response.write("3. chandelier\n");

  response.end();
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Neon Albums is open! Visit http://localhost:3000");
});
