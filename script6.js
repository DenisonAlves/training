function soAnimais(){
  const jsAnimaisLista = document.querySelectorAll('.js-animais-lista li');
  const jsAnimaisDescricao = document.querySelectorAll('.js-animais-descricao section');

  if(jsAnimaisLista.length && jsAnimaisDescricao.length){
    jsAnimaisDescricao[0].classList.add('ativo');

    function ativarClasse (item){
      jsAnimaisDescricao.forEach((item) => {
        item.classList.remove('ativo');
      })
      jsAnimaisDescricao[item].classList.add('ativo');
    }

    jsAnimaisLista.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click',()=>{
        ativarClasse(index);
      })
    })
  }
}
soAnimais();

function accordionFunction (){
  const accordionList = document.querySelectorAll('.accordionList dt');

  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');

  function accordionClass(){
    this.classList.toggle('ativo');  
    this.nextElementSibling.classList.toggle('ativo');
  }


  accordionList.forEach((item)=>{  
    item.addEventListener('click', accordionClass);
    }
  );
}
accordionFunction();

function rollMenu (){
  const menuItens = document.querySelectorAll(".js-menu a[href^='#']");

  function rolagemMenu(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const selector = document.querySelector(href);
    console.log(selector)

    selector.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  menuItens.forEach((item) =>{
    item.addEventListener("click", rolagemMenu);
  })
}
rollMenu();

function animandoRolagem(){
  const scrollSecao = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  if(scrollSecao.length){
    function rolandoSecao(){
      scrollSecao.forEach((item) => {
        const secaoTop = item.getBoundingClientRect().top;
        const isSectionVisible = (secaoTop - windowMetade) < 0;
        if(isSectionVisible){
          item.classList.add('ativo');
        }else{
          item.classList.add('remove');
        }    
      });  
    }

    rolandoSecao();

    scrollSecao.forEach ((secao) => {
      window.addEventListener('scroll', rolandoSecao);
    })
  }
}
animandoRolagem();