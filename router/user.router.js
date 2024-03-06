const Router = require("express").Router();
const userController = require('../controller/user.controller')

Router.get('/get', userController.getUser);
Router.post('/register', userController.registerUser);
Router.post('/login', userController.login);

module.exports = Router