const Router = require("express").Router();
const userController = require('../controller/user.controller')

Router.get('/get', userController.getUser);

module.exports = Router