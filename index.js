const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const client = require("./config/db");
//init
const app = express();

//config
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(volleyball);

//routes

//server
const PORT = process.env.PORT;
client
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running in port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
