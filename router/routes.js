const Router = require("express").Router();
let userRouter = require('./user.router');

Router.use(userRouter)

module.exports = Router