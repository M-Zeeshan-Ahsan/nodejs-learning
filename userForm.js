function userForm(req, res) {
  res.write(`<form action="/submit" method="POST">
      <input type="text" name="name" placeholder="Name" />
      <br />
      <input type="email" name="email" placeholder="Email" />
      <br />
      <button type="submit">Submit</button>
    </form>`);
}
module.exports = userForm;
