let http = require("http");

const PORT = 5000;

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the server");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
