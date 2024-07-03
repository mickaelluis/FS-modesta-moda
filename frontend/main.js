import 'regenerator-runtime/runtime';
import 'core-js/stable';


import './assets/css/footer.css';
import './assets/css/main.css';
import './assets/css/header.css';

import Descontoprincipal from "../public/assets/Fotos/baner/Descontoprincipal.jpeg"
import Baner from "../public/assets/Fotos/baner/Baner-2.jpeg"
import carrinho from "../public/assets/Fotos/carrinho.png"
import coracao from "../public/assets/Fotos/coracao.png"
import local from "../public/assets/Fotos/local.png"
import log from "../public/assets/Fotos/log.png"
import lupa from "../public/assets/Fotos/lupa.png"
import perfil from "../public/assets/Fotos/perfil.png"
import top from "../public/assets/Fotos/top.jpg"

import Produtos from "../public/assets/Fotos/Produtos/fotoBrancadeCosta.jpg"

document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.querySelector('.Descontoprincipal');
    imgElement.src = Descontoprincipal;

    const Banerr  = document.querySelector('.Baner');
    Banerr.src = Baner

    const car  = document.querySelector('.carrinho');
    car.src = carrinho

    const Hart = document.querySelector('.coracao');
    Hart.src = coracao

    const locate = document.querySelector('.local');
    locate.src = local

    const lo = document.querySelector('.img-superior');
    lo.src = log

    const magnifyingGlass = document.querySelector('.lupa');
    magnifyingGlass.src = lupa

    const profile = document.querySelector('.perfil');
    profile.src = perfil

    const to  = document.querySelector('.top');
    to.src = top

    const Products = document.querySelector('.Produtos');
    Products.src = Produtos
});