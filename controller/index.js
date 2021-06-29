const {getUser , getUserById} = require('./user.controller');
const { getTodos } = require('./todo.controller');

exports.userControllers = {getUser, getUserById};

exports.todosControllers = {getTodos};