//http (HTTP Module):	Create, configure, and manage web servers
//The http module is foundational because it allows us to create a web server quickly!
// It handles HTTP incoming requests and also responses.
//📩 An HTTP request is what happens when your browser sends a request to a server for a resource.
//📤 An HTTP response is what the server sends back to your browser after it gets your request.

const http = require("http");

// Create a server object
const server = http.createServer((request, response) => {
  response.write("Hello World!"); // writes a response to the client
  response.end(); //ends the response
});

server.listen(3000); // means the server object listens on port 3000

//In the terminal, nothing happened (you should just see a cursor).
// But if you open a browser and head over to http://localhost:3000, you should see ‘Hello World!’
