const { Schema, model } = require("mongoose");

const CourseSchema = new Schema(
  {
    volunteer: {
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
    },
  },
  { timestamps: false }
);

CourseSchema.post("init", function () {
  if (this.students[0]) this.limit = true;
});

module.exports = model("Course", CourseSchema);
