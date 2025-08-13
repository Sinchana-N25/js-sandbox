const http = require("http");

let status = "brb, watching Buffy The Vampire Slayer! 📺";

const server = http.createServer((request, response) => {
  if (request.method === "DELETE") {
    if (!status) {
      console.log("No status to delete.");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("No status left!");
    } else {
      console.log("Deleted status:", status); // Log the deleted status
      status = ""; // Clear the status
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Status deleted!");
    }
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Go back to your terminal!");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// cURL command:
// curl.exe -X DELETE http://localhost:3000/
