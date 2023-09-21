const path = require("path");
const Signup = require("../models/signup");
const alert = require("alert");

const handleSignUp = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    await Signup.insertMany([data]);
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  } catch (error) {
    alert("duplicate email");
  }
};

module.exports = handleSignUp;
