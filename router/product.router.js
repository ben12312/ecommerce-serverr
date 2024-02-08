const Router = require("express").Router();
const productController = require('../controller/product.controller')

Router.get('/get', productController.getProduct);

module.exports = Router