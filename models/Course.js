const { Schema, model } = require("mongoose");

const CourseSchema = new Schema(
  {
    teacher: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Volunteer",
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    feedback: {
      type: String,
    },
    time: {
      type: String,
      required: true,
    },
    news: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      default: "PENDING",
    },
    limit: {
      type: Boolean,
      default: false,
    },
    start: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: false }
);

module.exports = model("Course", CourseSchema);
