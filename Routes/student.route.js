const express = require("express");
const router = express.Router();
const {
  getAllStudent,
  postData,
  getById,
} = require("../Controller/student.controller");

router.get("/", getAllStudent);
router.post("/", postData);
router.get("/:id", getById);
module.exports = router;
