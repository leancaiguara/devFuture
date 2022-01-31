const Router = require("express").Router();

const volunteerRouter = require("./volunteer");
<<<<<<< HEAD:routes/index.js
const studentRouter=require("./student")
const adminRouter=require("./admin")

Router.use("/volunteer", volunteerRouter);
Router.use("/student",studentRouter)
Router.use("/admin",adminRouter)
=======
const courseRouter = require("./course");

Router.use("/volunteer", volunteerRouter);
Router.use("/course", courseRouter);
>>>>>>> fb18b98721f6931f25838a8bee14906149c1d9cc:server/routes/index.js

module.exports = Router;
