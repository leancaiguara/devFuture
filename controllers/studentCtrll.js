const Student = require("../models/Student");
const bcrypt = require("bcrypt");
const generateJWT = require("../config/generateJWT");
const login=require("../utils.js/auth")

class StudentCtrll {

  static async register (req, res) {

    try {
      const newStudent = await Student.create(req.body);

      res.status(200).send(newStudent);
    } catch (error) {
      return res.status(500).send(console.log(error));
    }
  }

  static async login(req, res) {
   
  login(Student,req,res)


  }

  static async getAllStudents(req, res) {
    try {
      const students = await Student.find();

      return res.status(200).send(students);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  static async studentById(req, res) {
    try {
      const student = await Student.findById(req.params.id);

      res.status(200).send(student);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  static async updateStudent(req, res) {
    try {
        
      req.body.password
        ? (req.body.password = bcrypt.hashSync(req.body.password, 12))
        : null;
      const student = await Student.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return student
        ? res.status(200).send(student)
        : res.status(400).send("Bad update");
    } catch (err) {
      res.status(500).send(err);
    }
  }
}


module.exports=StudentCtrll