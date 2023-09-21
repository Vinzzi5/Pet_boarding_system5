const path = require("path");
const Signup = require("../models/signup");
const alert = require("alert");

const handleSignIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Signup.findOne({ email: email });
    if (useremail.password === password) {
      // Generate Tokens
      const token = await useremail.generateAuthToken();
      // Store Tokens In Cookies
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      res.sendFile(path.join(__dirname, "..", "views", "main.html"));
      res.redirect("../main.html");
    } else {
      alert("wrong password");
    }
  } catch (error) {
    alert("invalid email");
  }
};

module.exports = handleSignIn;
