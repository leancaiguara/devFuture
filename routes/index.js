const Router = require("express").Router();

const volunteerRouter = require("./volunteer");
const studentRouter=require("./student")
const adminRouter=require("./admin")

Router.use("/volunteer", volunteerRouter);
Router.use("/student",studentRouter)
Router.use("/admin",adminRouter)

module.exports = Router;
