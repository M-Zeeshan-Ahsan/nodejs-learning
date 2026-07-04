const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("html/form.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("internal server error");
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      if (req.url === "/") {
        res.write(data);
      } else if (req.url === "/submit") {
        res.write("Data submitted successfully");
      }
      res.end();
    });
  })
  .listen(8080);
