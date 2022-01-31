const generateJWT = require("../config/generateJWT");

async function login(model, req, res) {
  try {
    const userFound = await model.findOne({ email: req.body.email });

    if (!userFound) {
      return res.status(400).send("Error you are not registered");
    }

    const comparePassword = await model.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!comparePassword) return res.status(400).send("Wrong credentials");

    const token = generateJWT({ id: userFound._id });

    return res.status(200).send({ message: "Login succesfull", token });
  } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = login;
