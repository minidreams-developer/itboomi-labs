let http = require("http");
let fs = require("fs");

const PORT = 5000;

let htmlFile = fs.readFileSync("./website/index.html", "utf-8");
let cssFile = fs.readFileSync("./website/index.css", "utf-8");
let jsFile = fs.readFileSync("./website/index.js");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlFile);
    res.end();
  } else if (req.url === "/index.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(cssFile);
    res.end();
  } else if (req.url === "/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(jsFile);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

server.on("ERROR", (err) => {
  console.log(err);
});
