const path = require("path");

// console.log("path==>", path);
console.log("path-sep", path.sep);

// path.join(folder, folder, folder, file)

let newPath = path.join("/main-folder", "/sub-folder", "file.txt");

console.log("newPath==>", newPath);

// path.resolve(custom-created-path)

console.log("resolved-path=>", path.resolve(newPath));

console.log(path.join(__dirname, newPath));
