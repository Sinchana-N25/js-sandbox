const http = require("http");

let visitor_count = 0;

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    visitor_count++;
    console.log(`Visitor count: ${visitor_count}`);
  }
});

server.listen(3000, () => {
  console.log("Visitor Counter running at http://localhost:3000");
});
