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