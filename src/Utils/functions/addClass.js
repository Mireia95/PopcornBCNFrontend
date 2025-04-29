//funcion que me permite añadir la clase .active para el header al seleccionar un <li>
export const addClassActive = (li) => {
  //1 quito la clase active en todos los <li> del header
  const allLi = document.querySelectorAll('header > nav > ul > li');
  for (const option of allLi) {
    option.classList.remove('active');
  }
  //2 añado la clase active al <li> seleccionado
  li.classList.add('active');
};

export const toggleDisplayNone = (ele) => {
  const elemento = document.querySelector(ele);
  elemento.classList.toggle('displayNone');
};
