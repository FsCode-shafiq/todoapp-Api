const {getUser, signUpUser } = require('./user.controller');
const { getTodos } = require('./todo.controller');

exports.userControllers = {getUser , signUpUser};

exports.todosControllers = {getTodos};