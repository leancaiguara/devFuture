const Router = require("express").Router();

const volunteerRouter = require("./volunteer");
const courseRouter = require("./course");

Router.use("/volunteer", volunteerRouter);
Router.use("/course", courseRouter);

module.exports = Router;
