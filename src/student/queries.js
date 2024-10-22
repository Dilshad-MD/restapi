// const { addStudents } = require("./controller");
const getStudents = "SELECT * FROM Students ";
const getStudentsById = "SELECT * FROM Students WHERE id =$1";
const checkEmailExists = "SELECT s FROM Students s WHERE s.email = $1";
const addStudents =
  "INSERT INTO Students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudents = "DELETE FROM Students WHERE id = $1";
const updateStudents = "UPDATE Students SET name = $1 WHERE id = $2";

module.exports = {
  getStudents,
  getStudentsById,
  checkEmailExists,
  addStudents,
  updateStudents,
  removeStudents,
};
