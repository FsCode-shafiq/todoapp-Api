const express = require("express");

const { userControllers } = require('../controller');

const app = express();

const router = express.Router();

router.get("/", userControllers.getUser);
router.post('/singup', userControllers.signUpUser);

exports.userRoute = app.use("/user", router);
