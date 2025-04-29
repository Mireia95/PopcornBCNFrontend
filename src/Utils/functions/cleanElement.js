import { getLogo } from '../../Components/common/Logo/Logo';

//funcion general que permite limpiar un elemento
export const cleanElement = ({ element, logo = true }) => {
  const ele = document.querySelector(element);
  ele.innerHTML = '';
  if (logo) {
    getLogo();
  }
};
