const express = require("express");

const { todosControllers } = require('../controller');
const app = express();

const router = express.Router();

router.get("/", todosControllers.getTodos);

exports.todoRoute = app.use("/todo", router);
