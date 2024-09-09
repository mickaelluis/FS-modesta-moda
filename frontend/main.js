import 'regenerator-runtime/runtime';
import 'core-js/stable';


import './assets/css/header.css';
import './assets/css/main.css';
import './assets/css/footer.css';


import imagTop from '../public/assets/Fotos/top.jpg'
import logImage from '../public/assets/Fotos/log.png';
import lupaImage from '../public/assets/Fotos/lupa.png';
import favorito from '../public/assets/Fotos/coracao.png'
import car from '../public/assets/Fotos/carrinho.png'
import perfil from '../public/assets/Fotos/perfil.png'
import local from '../public/assets/Fotos/local.png'
import Baner from '../public/assets/Fotos/baner/Baner-2.jpeg'
import Desconto from '../public/assets/Fotos/baner/descontoprincipal.jpeg'

//produtos
import fotoProduto from '../public/assets/Fotos/Produtos/Proto-redondo.jpeg'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.img-superior').src = imagTop;
    document.querySelector('.log-inferior').src = logImage;
    document.querySelector('.lupa').src = lupaImage;
    document.querySelector('.coracao').src = favorito;
    document.querySelector('.carrinho').src = car;
    document.querySelector('.perfil').src = perfil;
    document.querySelector('.local-imagem').src = local;

  const desconto = document.querySelectorAll('.Descontoprincipal')
  desconto.forEach((img) => {
    img.src = Desconto;
  });

  const baner = document.querySelectorAll('.baner')
  baner.forEach((img) => {
    img.src = Baner;
  });

    //produtos
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach((img) => {
        img.src = fotoProduto;
      });
});

import './assets/js/Banner'
import './assets/js/barraDePesquisa'
import './assets/js/carrossel'
import './assets/js/CarrosselDinamico'
