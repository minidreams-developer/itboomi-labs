const { readFileSync, writeFileSync } = require("fs");

// readFileSync("/file-path", "utf-8")

let fileOne = readFileSync("./first.txt", "utf-8");

console.log("fileOne:", fileOne);

let fileTwo = readFileSync("./second.txt", "utf-8");

console.log("fileTwo:", fileTwo);

// writeFileSync("/destination-file-path", content)

writeFileSync("./third.txt", `${fileOne}, \n${fileTwo}`, { flag: "a" });
