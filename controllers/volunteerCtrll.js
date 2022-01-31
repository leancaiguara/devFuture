const Volunteer = require("../models/Volunteer");
const bcrypt = require("bcrypt");

class VolunteerCtrll {
  static async create(req, res) {
    try {
      const newVolunteer = await Volunteer.create(req.body);
      return res.status(200).send(newVolunteer);
    } catch (err) {
      return res.status(500).send(err);
    }

  


  }

  static async login (req,res)  {
  


  }
  static async getAll(req, res) {
    try {
      const volunteers = await Volunteer.find();
      return res.status(200).send(volunteers);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  //get volunteer
  static async getVolunteer(req, res) {
    try {
      /* const volunteer = await User.findById(req.params.id, { status: true }).select({ password: 0 });
      const { password, ...userData } = volunteer._doc;
      return res.status(201).json(userData); */
      const volunteer = await Volunteer.findById(req.params.id);
      return res.status(200).send(volunteer);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  static async updateVolunteer(req, res) {
    try {
      req.body.password ? (req.body.password = bcrypt.hashSync(req.body.password, 12)) : null;
      const volunteer = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return volunteer ? res.status(200).send(volunteer) : res.status(400).json("Bad update");
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
module.exports = VolunteerCtrll;
