//Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector(".menu");
menu.classList.add("ativo");
console.log(menu.classList);

// Remove a classe de todos os itens do menu e mantenha apenas no primeiro
const classes = document.querySelectorAll(".menu a");
classes.forEach ((item, index) => {
  if(index!=0){
    item.classList.remove("a");    
  }
})

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');
img.forEach ((item)=>{  
  console.log(item.getAttribute('alt')) 
})



// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="https"]');
link.setAttribute('href', 'link');
