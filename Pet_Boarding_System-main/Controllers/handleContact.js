const Contact = require("../models/contact");
const alert = require("alert");

const handleContact = async (req, res) => {
  const data = {
    username: req.body.name,
    email: req.body.email,
    message: req.body.msg,
  };
  await Contact.insertMany([data]);
  alert(`your feedback has been recorded`);
};

module.exports = handleContact;
