const http = require("http");
const userData = [
  {
    name: "zeeshan",
    age: 22,
    email: "ahsansahi6@gmail.com",
  },
  {
    name: "usman",
    age: 25,
    email: "usman@example.com",
  },
];
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
  })
  .listen(3000);
