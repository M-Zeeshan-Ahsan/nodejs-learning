const http = require("http");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("hello world");
    } else if (req.url === "/about") {
      res.write("hello about");
    } else {
      res.write("other page");
    }
    res.end();
  })
  .listen(3001);
