const path = require("path");
const alert = require("alert");

const handleLogout = async (req, res) => {
  res.clearCookie("jwtoken");
  alert("Logged out Successfully");
  await req.rootUser.save();
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

module.exports = handleLogout;
