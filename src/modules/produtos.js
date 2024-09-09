const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  desconto: String,
  categoria: String,
  estoque: Number,
});

const ProductModel = mongoose.model('Produtos', productSchema);

function Product(body) {
  this.body = body 
  this.erros = []
  this.Product = null 
}

Product.BuscaProdutos = async function() { 
  const produts = await ProductModel.find()
  .sort({ criadoEm: -1});
  return produts 
}



module.exports = Product;