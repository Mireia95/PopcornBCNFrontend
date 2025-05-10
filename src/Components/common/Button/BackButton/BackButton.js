import { toggleDisplayNone } from '../../../../Utils/functions/addClass';
import { cleanElement } from '../../../../Utils/functions/cleanElement';
import { createButton } from '../GenericButton/Button';

import './BackButton.css';

//funcion de boton para volver, para limpiar toda la pagina cuando etsamos en infoMovie
export const createBackButton = ({
  clean = 'main',
  funcion,
  header = true,
  logo = true
}) => {
  const buttonBack = createButton({
    texto: 'Volver',
    clase: 'backButton',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736783857/PopcornBCN/volver_twzgxc.png'
  });
  buttonBack.classList.add('flexCenter');
  buttonBack.addEventListener('click', () => {
    cleanElement({ element: clean, logo: logo });
    funcion(); //pintar de nuevo
    //el prop header sirve para saber si hay que hacer algo con el o no
    if (header) {
      toggleDisplayNone('header');
    }
  });
  return buttonBack;
};
