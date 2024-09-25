// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemNome = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagemNome);

// Selecione todos os links internos (onde o href começa com #)
const linkNome = document.querySelectorAll('[href^="#"]');
console.log(linkNome);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2")
console.log(primeiroH2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('body p');
//Array.from(ultimoP);
console.log(ultimoP[ultimoP.length - 1]);


//mostre no console cada parágrado do site 
const paragrafos = document.querySelectorAll('p');
console.log (paragrafos);

//mostre os textos dos parágrados no console 
paragrafos.forEach ((item) => {
  console.log(item.innerHTML);
});