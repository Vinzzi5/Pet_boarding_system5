//connection to the database using mongoose
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/Doggydaycare", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("connection successful");
      });
  } catch (err) {
    console.error(err);
  }
};
module.exports = connectDB;
