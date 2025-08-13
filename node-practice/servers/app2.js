const http = require("http"); // Import the http module

// Create a server
const server = http.createServer((request, response) => {
  console.log("Requested URL: " + request.url);
  console.log("Request Method: " + request.method);
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Hello, World!");
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
