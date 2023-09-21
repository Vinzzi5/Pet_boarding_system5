const path = require("path");

const handleHomePage = (req, res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  res.sendFile(path.join(__dirname, "..", "views", "main.html"));
};

module.exports = handleHomePage;
