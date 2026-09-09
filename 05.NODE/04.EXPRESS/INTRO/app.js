// let http = require("http");
let express = require("express");
let path = require("path");
let app = express();

const PORT = 5000;

app.use(express.static("./website"));

// req methods
// get(), post(), put(), patch(), delete()

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./website/index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on PORT 5000");
});
