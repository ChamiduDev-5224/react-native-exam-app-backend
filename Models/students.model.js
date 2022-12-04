const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  indexNo: { type: String, required: true },
  Name: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  birthYear: { type: String, required: true },
});

module.exports = mongoose.model("stSchema", studentSchema);
