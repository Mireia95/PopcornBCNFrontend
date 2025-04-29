import { addImage } from '../../../../Utils/functions/addImage';
import './Button.css';

//funcion general para crear buttons
//si el button tiene una icona, tambien la incluye
export const createButton = ({ texto, clase, type = 'button', url }) => {
  const button = document.createElement('button');
  // button.textContent = texto;
  if (clase) {
    button.className = clase;
  }
  button.type = type;
  if (url) {
    let icon = addImage(texto, url);
    button.prepend(icon);
  }
  if (texto) {
    button.append(texto);
  }
  return button;
};
