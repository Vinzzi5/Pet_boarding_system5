const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tokens: [{ token: { type: String, required: true } }],
});

//generating tokens
signupSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, "process.env.SECRET_KEY");
    this.tokens = this.tokens.concat({ token: token }); //1st is dbtoken and 2nd is token generated in above line
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
const Signup = new mongoose.model("Signup", signupSchema);
module.exports = Signup;
