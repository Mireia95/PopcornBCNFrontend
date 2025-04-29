import { createButton } from '../../Button/GenericButton/Button';
import './ConfirmPopup.css';

//componente para el popup de confirmación de las acciones, como registrar el usuario, o eliminar elementos
//si le pasamos en parametros "button = true" crearà también un botón con el evento, para recargar la pagina que les pasamos
//si el button = false, no crea el boton, pero solo el div del popup
export const createConfirmPopup = ({ texto, button = false, page }) => {
  const div = document.createElement('div');
  div.classList.add('confPopup', 'flexCenter');
  const p = document.createElement('p');
  p.innerText = texto;

  div.append(p);

  if (button) {
    const butt = createButton({ texto: 'Continuar', clase: 'loginButton' });
    //si le paso la funcion para recargar, entonces creo el evento
    if (page) {
      butt.addEventListener('click', () => {
        div.remove();
        page();
      });
    }
    div.append(butt);
  }

  return div;
};
