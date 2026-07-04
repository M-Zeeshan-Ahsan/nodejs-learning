const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http
  .createServer((req, res) => {
    fs.readFile("html/form.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Internal Server Error");
      }

      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else if (req.url === "/submit") {
        let dataBody = [];

        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          let rawData = Buffer.concat(dataBody).toString();
          let readableData = querystring.parse(rawData);
          let dataString =
            "My name is " +
            readableData.name +
            " and my email is " +
            readableData.email;
          fs.writeFileSync("text/" + readableData.name + ".txt", dataString);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(
            `Data submitted successfully <br><br> ${JSON.stringify(readableData)}`,
          );
        });
      }
    });
  })
  .listen(8080);
