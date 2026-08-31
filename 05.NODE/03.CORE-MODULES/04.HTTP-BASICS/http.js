let http = require("http");

// http -> createServer
// http -> listen
// port -> exposing the api

const PORT = 5000;

const server = http.createServer((req, res) => {
  // req => an object what we get from front-end (client -> mobile, web browsers) eg: req.url, req.body
  // res => an object what we send from backend (we can send data from here) eg: write, end, writeHead
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the Home Page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the About Page</h1>");
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Not Found</h1>");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

server.on("error", (err) => {
  console.log(err.message);
});
