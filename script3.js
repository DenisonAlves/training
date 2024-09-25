// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');
primeiraImagem.offsetTop;

// Retorne a soma da largura de todas as imagens
const todasImagens = document.querySelectorAll('img');
let larguraTotal = 0;

todasImagens.forEach((item, indice)=>{
  if(indice<todasImagens.length){
    larguraTotal += item.clientWidth; 
  }else{
    return larguraTotal;
  }   
});

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('body a');
links.forEach ((item, indice) => {
  const rect = item.getBoundingClientRect();
  if(rect.height>=48 && rect.width>=48){
    console.log('O link ' + indice + ' atende o mínimo recomendado');
  }else {
    console.log('O link ' + indice + ' não atende o mínimo recomendado');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
window.innerWidth;
if(window.innerWidth < 720){
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile');  
}
console.log(window.innerWidth)
