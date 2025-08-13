const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  console.log("App name: Discord");
  console.log("Create: Write a message in a channel");
  console.log("Read: See who has reacted to my message");
  console.log("Update: Edit my message to fix a typo");
  console.log("Delete: Delete my message");
  response.end("");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
