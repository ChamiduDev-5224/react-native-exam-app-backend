const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  indexNo: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true, max: 10 },
  birthDay: { type: String, required: true },
});

module.exports = mongoose.model("students", studentSchema);
