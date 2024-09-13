const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
