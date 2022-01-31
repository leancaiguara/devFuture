const Course = require("../models/Course");

class courseCtrll {
  static async allCourses(req, res) {
    try {
      const courses = await Course.find();
      return res.status(200).send(courses);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  static async getCourse(req, res) {
    try {
      const course = await Course.findById(req.params.id);
      return res.status(200).send(course);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  static async createCourse(req, res) {
    const course = new Course(req.body);

    course.volunteer = req.body.volunteerId;

    try {
      const newCourse = await course.save();
      return res.status(200).send(newCourse);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  static async updateCourse(req, res) {
    try {
      const course = await Course.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).send(course);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  static async deleteCourse(req, res) {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) return res.status(400).json("Bad deleted");
      await Course.findByIdAndDelete(req.params.id);
      res.status(200).send("deleted");
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = courseCtrll;
