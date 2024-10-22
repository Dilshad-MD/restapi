const { Pool } = require("pg");
const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const addStudents = (req, res) => {
  const { name, email, age, dob } = req.body;
  //check email is exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email alreasy existis.");
    }
    // add students to db
    pool.query(
      queries.addStudents,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Student Created Succesfully!");
      }
    );
  });
};
const removeStudents = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (error, results) => {
    const noStudentsFound = !results.rows.length;
    if (noStudentsFound) {
      res.send("Student does not exists in the database, could not remove.");
    }
    pool.query(queries.removeStudents, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student removed successfully. ");
    });
  });
};
const updateStudents = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getStudentsById, [id], (error, results) => {
    const noStudentsFound = !results.rows.length;
    if (noStudentsFound) {
      res.send("Student does not exists in the database, ");
    }
    pool.query(queries.updateStudents, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student update successfully.");
    });
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudents,
  updateStudents,
  removeStudents,
};
