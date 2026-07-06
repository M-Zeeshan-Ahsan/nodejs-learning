const fs = require("fs");
fs.writeFileSync("files/banana.txt", "this is banana file");
fs.unlinkSync("files/banana.txt");
const data = fs.readFileSync("files/apple.txt", "utf-8");
console.log(data);
