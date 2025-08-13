const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method === "POST") {
    let message = "";

    request.on("data", (chunk) => {
      message += chunk;
    });

    request.on("end", () => {
      console.log("New message:", message); // Log the message to the console

      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Message received!");
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Go back to your terminal!");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

// As usual, start the server with node app.js.
// Then, open a second terminal window and send a request using:
// curl.exe -X POST http://localhost:3000 -d "This is a message"
// curl: the keyword to send HTTP requests from the terminal
// .exe: necessary for windows
// -X: the flag that lets us specify the HTTP method we want to use (here, it's POST)
// http://localhost:3000: where we’re sending the request
// -d "This is a message": the data we’re sending in the body of the request
