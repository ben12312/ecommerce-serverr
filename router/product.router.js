const Router = require("express").Router();
const productController = require('../controller/product.controller')

Router.get('/get', productController.getProduct);
Router.put('/edit', productController.updateProduct);

module.exports = Router