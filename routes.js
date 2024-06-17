const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController'); // Corrigido aqui

// Rotas da home
route.get('/', homeController.index);

module.exports = route;
