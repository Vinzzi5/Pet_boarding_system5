const Signup = require("../models/signup");
const Booking = require("../models/booking");
const alert = require("alert");

const handleTrainingBooking = async (req, res) => {
  try {
    const userdet = await Signup.findOne({
      "tokens.token": req.cookies.jwtoken,
    });
    console.log(userdet);
    const email = userdet.email;
    const userName = userdet.name;
    const service = "Pet training";

    const timeslot = req.body.timeslot;
    const timeslot2 = Number.parseInt(timeslot) + 1;

    const data = {
      username: userName,
      petname: req.body.name,
      phone: req.body.phone,
      date: req.body.date,
      email: email,
      timeslot: req.body.timeslot,
      service: service,
    };

    await Booking.insertMany([data]);

    alert(`you have been alloted the time slot ${timeslot} - ${timeslot2}`);
  } catch (error) {
    console.log(error);
    alert("time slot is already booked");
  }
};

module.exports = handleTrainingBooking;
