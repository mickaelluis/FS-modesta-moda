const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController'); 
const ProdutosController = require('./src/controllers/ProdutosController');


// Rotas da home
route.get('/',ProdutosController.index ,homeController.index );




module.exports = route;