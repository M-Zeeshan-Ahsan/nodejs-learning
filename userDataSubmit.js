const querystring = require("querystring");
function userFormSubmit(req, res) {
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
    console.log(dataString);
  });

  res.write("Data submitted successfully!");
}
module.exports = userFormSubmit;
