const mongoose = require("mongoose");

var bookingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  petname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  timeslot: {
    type: Number,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
});

bookingSchema.index({ date: 1, timeslot: 1 }, { unique: true });

const Booking = new mongoose.model("Booking", bookingSchema);
module.exports = Booking;
