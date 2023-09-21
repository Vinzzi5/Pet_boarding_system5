//importing all the requirements
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;
const cookieParser = require("cookie-parser");
const authenticate = require("./middleware/authenticate");

// connect to database
connectDB();

// builtin , to handle form data
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //middleware to use cookie-parser

// to handle the json data whem json data is submitted
app.use(express.json());

//serve static files like css,img etc..
app.use(express.static(path.join(__dirname, "/public")));

//REST API to handle crud operations
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/signinc", require("./Controllers/handleSiginIn"));

app.get("/signup(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

app.post("/signupc", require("./Controllers/handleSignUp"));

app.get("/groombooking(.html)?", authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "groombooking.html"));
});

app.post("/bookingg", require("./Controllers/handleGroomBooking"));

app.get("/babybooking(.html)?", authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "babybooking.html"));
});

app.post("/bookingb", require("./Controllers/handleBabyBooking"));

app.get("/trainingbooking(.html)?", authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "trainingbooking.html"));
});

app.post("/bookingt", require("./Controllers/handleTrainingBooking"));

app.get("/main(.html)?", authenticate, require("./Controllers/handleHomePage"));

app.get(
  "/mybookings(.html)?",
  authenticate,
  require("./Controllers/handleViewBookings")
);

app.get("/about(.html)?", authenticate, require("./Controllers/handleAbout"));

app.get("/contact(.html)?", authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.post("/contactc", require("./Controllers/handleContact"));

app.get("/logout", authenticate, require("./Controllers/handleLogout"));

app.get("/*", (req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});
