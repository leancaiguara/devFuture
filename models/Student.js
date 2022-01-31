const { Schema, model } = require("mongoose");
const bcrypt=require("bcrypt")

const StudentSchema = new Schema(
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

    salt: {
      type: String,
      default: "",
    },
    school: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);



StudentSchema.static("hash", function (password, salt) {
  return bcrypt.hash(password, salt);
});


StudentSchema.statics.comparePassword = async function (password, newPassword) {
  return bcrypt.compare(password, newPassword);
};


StudentSchema.pre("save", async function (next) {

  const salt = await bcrypt.genSalt();
  this.salt = salt

  // Guardar el salt

  // Generar la contraseña hasheada
  const hashedPassword = await bcrypt.hash(this.password, salt);

  // Guardar contraseña hasheada
  this.password = hashedPassword;
});



module.exports = model("Student", StudentSchema);
