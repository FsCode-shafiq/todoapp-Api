const express = require("express");

const { userControllers } = require('../controller');

const app = express();

const router = express.Router();

router.get("/", userControllers.getUser);
router.get("/:id", userControllers.getUserById);

exports.userRoute = app.use("/user", router);
