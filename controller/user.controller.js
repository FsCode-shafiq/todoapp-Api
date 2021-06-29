const bcrypt = require("bcrypt");

const { userModel } = require('../models');

exports.getUser = async (req, res) => {
  res.json({ sucess: true, message: "User router work fine" });
};

exports.signUpUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({
      sucess: false,
      message: "username and password required",
    });
  }
  try {
    const user = await userModel.findOne({username});
    if (user) {
      res.status(409).send({
        sucess: false,
        message: "user already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const createUser = await userModel.create({
      username,
      password: hashPassword,
    });

    createUser.save();
    return res.send({
      sucess: true,
      user: createUser,
      message: "user created sucessfully",
    });
  } catch (error) {
    console.log(`server error: ${error.message}`);
  }
};
