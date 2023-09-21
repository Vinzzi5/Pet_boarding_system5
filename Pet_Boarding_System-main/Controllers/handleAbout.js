const path = require("path");

const handleAbout = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "about.html"));
};

module.exports = handleAbout;
