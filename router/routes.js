const Router = require("express").Router();
let userRouter = require('./user.router');
let productRouter = require('./product.router');

Router.use('/user',userRouter);
Router.use('/product',productRouter);

module.exports = Router