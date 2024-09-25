// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll(".menu");
console.log(links)

function callback(event){
  event.preventDefault();
  //console.log(event.target)
  event.target.classList.toggle('ativo');
  event.currentTarget.classList.remove('ativo');
  //console.log(event.currentTarget)
}

links.forEach((item)=>{
  item.addEventListener('click', callback);   
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todos = document.querySelectorAll('body');

function who(event){
  console.log(event.target);
}

todos.forEach((item) => {
  item.addEventListener('click', who);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const destruidor = document.querySelectorAll('body');

function bye(event){
 // event.target.remove();
}

destruidor.forEach((item) => {
  item.addEventListener('click', bye);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
let tamanho = 12;
function bigText (event){ 
  if(event.key == 't'){    
    document.body.style.fontSize = (tamanho*1.5)+'px';   
    tamanho++;  
  }
}

window.addEventListener('keydown', bigText);

