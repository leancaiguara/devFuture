const { Schema, model } = require("mongoose");

const VolunteerSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
    },
    available: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    comments: {
      type: String,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = model("Volunteer", VolunteerSchema);
