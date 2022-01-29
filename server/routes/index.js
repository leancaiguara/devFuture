const Router = require("express").Router();

const volunteerRouter = require("./volunteer");

Router.use("/volunteer", volunteerRouter);

module.exports = Router;
