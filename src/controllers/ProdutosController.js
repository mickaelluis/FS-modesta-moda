const Product = require('../modules/produtos');


exports.index = async(req, res) => {
    const Produtos = await Product.BuscaProdutos();
    res.render('index', { Produtos })
}