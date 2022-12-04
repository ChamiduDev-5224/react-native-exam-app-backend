const { default: mongoose } = require("mongoose");
const stSchema = require("../Models/students.model");

const getAllStudent = async (req, res) => {
  const students = await stSchema.find();
  res.status(200).send(students);
};

const postData = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Bad request",
    });
  }
  const postStudentData = await stSchema.create({
    indexNo: req.body.indexNo,
    name: req.body.name,
    email: req.body.email,
    contactNo: req.body.contactNo,
    birthDay: req.body.birthDay,
  });

  return res.status(200).json(postStudentData);
};
const getById = async (req, res) => {
  const getByiD = await stSchema.findOne({ name: req.params.id });
  if (!getByiD?.name)
    return res.status(400).json({
      message: "Bad request",
    });
  res.status(200).send(getByiD);
};
module.exports = {
  getAllStudent,
  postData,
  getById,
};
