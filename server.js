const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hi sadasd");
  res.end();
});
server.listen(4800);
