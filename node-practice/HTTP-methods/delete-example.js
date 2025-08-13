const http = require("http");

let username = "chillPlayer25";

const server = http.createServer((request, response) => {
  if (request.method === "DELETE") {
    console.log("Original Username:", username);
    username = null;
    console.log("Username deleted.");

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Username deleted!");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Go back to your terminal!");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

//curl.exe -X DELETE http://localhost:3000
