document.addEventListener('DOMContentLoaded', function() {
const Product = require('../../../src/modules/produtos');
const conteinerProdutos = document.getElementById('container-slider-js');
const produto = Product.BuscaProdutos();
const produtos = [];
produtos = produto;
console.log(produtos)
const Produto = document.createElement('div');
Produto.innerHTML = ` <div class="Produtos ">
            <div class="container-slider" >
                <div class="slider js-slider">
                   <div class="product-container"  >
                       <div class="container-heart">
                       </div>
                       <a href="" class="item">
                           <img src="" class="product-image" >
                          
                           <div class="description">
                               <h4>${produtos.nome}</h4>
                               <p>Descrição: ${produtos.descricao}</p>
                               <p class="discount">${produtos.desconto}</p>
                               <p><strong>${produtos.preco}</strong></p>
                               <p>ou 6x de R$ ${(produtos.preco / 6).toFixed(2)}</p>
                               <div class="star">
                                   <p>
                                       4,5
                                   </p>
                                   <p>
                                   &#9733
                                   &#9733
                                   &#9733
                                   &#9733 
                                   &#9734
                                   </p>
                               </div>
                           </div>                    
                       </a>
                   </div>
       
                   <div class="product-container" >
                       <div class="container-heart">   
                       </div>
                       <a href="" class="item">
                           <img src="" class="product-image" >
                           <div class="description">
                           <h4>${Produto.nome}</h4>
                               <p>Descrição: ${Produto.descricao}</p>
                               <p class="discount">${Produto.desconto}</p>
                               <p><strong>${Produto.preco}</strong></p>
                               <p>ou 6x de R$ ${(Produto.preco / 6).toFixed(2)}</p>
                           <div class="star">
                                   <p>
                                       4,5
                                   </p>
                                   <p>
                                   &#9733
                                   &#9733
                                   &#9733
                                   &#9733 
                                   &#9734
                                   </p>
                               </div>
                           </div>
                       </a>
                   </div>
       
                   <div class="product-container" >
                       <div class="container-heart">
                       </div>
                       <a href="" class="item">
                           <img src="" class="product-image" >
                           <div class="description">
                              <h4>${Produto.nome}</h4>
                               <p>Descrição: ${Produto.descricao}</p>
                               <p class="discount">${Produto.desconto}</p>
                               <p><strong>${Produto.preco}</strong></p>
                               <p>ou 6x de R$ ${(Produto.preco / 6).toFixed(2)}</p>
                               <div class="star">
                                   <p>
                                       4,5
                                   </p>
                                   <p>
                                   &#9733
                                   &#9733
                                   &#9733
                                   &#9733 
                                   &#9734
                                   </p>
                               </div>
                           </div>
                       </a>
                   </div>
       
                   <div class="product-container" >
                       <div class="container-heart">
                       </div>
                       <a href="" class="item">
                           <img src="" class="product-image" >
                           <div class="description">
                               <h4>${Produto.nome}</h4>
                               <p>Descrição: ${Produto.descricao}</p>
                               <p class="discount">${Produto.desconto}</p>
                               <p><strong>${Produto.preco}</strong></p>
                               <p>ou 6x de R$ ${(Produto.preco / 6).toFixed(2)}</p>
                               <div class="star">
                                   <p>
                                       4,5
                                   </p>
                                   <p>
                                   &#9733
                                   &#9733
                                   &#9733
                                   &#9733 
                                   &#9734
                                   </p>
                               </div>
                           </div>
                       </a>
                   </div>
       
                   <div class="product-container" >
                       <div class="container-heart">
                       </div>
                       <a href="" class="item">
                           <img src="" class="product-image" >
                           <div class="description">
                              <h4>${Produto.nome}</h4>
                               <p>Descrição: ${Produto.descricao}</p>
                               <p class="discount">${Produto.desconto}</p>
                               <p><strong>${Produto.preco}</strong></p>
                               <p>ou 6x de R$ ${(Produto.preco / 6).toFixed(2)}</p>
                               <div class="star">
                                   <p>
                                       4,5
                                   </p>
                                   <p>
                                   &#9733
                                   &#9733
                                   &#9733
                                   &#9733 
                                   &#9734
                                   </p>;
                               </div>
                           </div>
                       </a>
                   </div>
               </div>
           </div>
        </div> `
conteinerProdutos.appendChild(Produto)  

    produtos.forEach(produto => {
      const produtoElemento = criarProdutoElemento(produto);
      produto.appendChild(produtoElemento);
    });
    console.log(produtos)
})