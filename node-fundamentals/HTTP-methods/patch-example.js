const http = require("http");

let username = "@sinch";

const server = http.createServer((request, response) => {
  if (request.method === "PATCH") {
    let patchData = "";

    request.on("data", (chunk) => {
      patchData += chunk;
    });

    request.on("end", () => {
      console.log("Original Username:", username);

      // Only update the username with the patch data (assuming it's a string to append)
      username += patchData;

      console.log("Updated Username:", username);

      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Username patched!");
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Go back to your terminal!");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

//curl.exe -X PATCH http://localhost:3000 -d "25"
//bio += ' ' + addition; // Append new content to the end (for many lines)
