const Signup = require("../models/signup");
const Booking = require("../models/booking");
const alert = require("alert");

const handleViewBookings = async (req, res) => {
  const userdet = await Signup.findOne({ "tokens.token": req.cookies.jwtoken });
  const email = userdet.email;
  const allbookings = await Booking.find({ email: email });
  if (allbookings[0] === undefined) {
    alert("no bookings");
  } else {
    res.setHeader("Content-type", "text/html");
    res.write('<h1 style="text-align: center;">My bookings</h1>');
    allbookings.forEach((element) => {
      res.write(
        "<html>" +
          "<head> <style>" +
          "body{background-color: gainsboro;font-size:1.5rem;display: flex;align-items: center;flex-flow: column nowrap;}.card{border: 3px solid black;border-radius: 1rem;width:50%;padding:2rem;margin:1rem;text-align:center;}" +
          "</style></head>" +
          "<body>" +
          '<section class="card">' +
          "<span>User name : </span>" +
          element.username +
          "<br>" +
          "<span>Pets name : </span>" +
          element.petname +
          "<br>" +
          "<span>Service : </span>" +
          element.service +
          "<br>" +
          "<span>Date : " +
          element.date.toString().slice(0, 15) +
          "<br>" +
          "<span>Time-slot : </span>" +
          element.timeslot +
          "<br>" +
          "</section>" +
          "</body>" +
          "</html>"
      );
    });
  }
};

module.exports = handleViewBookings;
