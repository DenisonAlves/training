// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq .faq-lista');
console.log(faqLista.children[0])

// Selecione o DD referente ao primeiro DT
console.log(faqLista.children[1]);
// Substitua o conteúdo html de .faq pelo de .animais
const sBody = document.querySelector('body');
const sFaq = document.querySelector('.faq');
const sAnimais = document.querySelector('.animais');

sBody.replaceChild(sAnimais, sFaq);


