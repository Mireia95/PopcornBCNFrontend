import { createButton } from '../GenericButton/Button';
import './CancelButton.css';

//funcion para crear el boton de "Cancelar"
export const createCancButton = ({ father, clase }) => {
  //la clase puede ser .cancelEdit o .cancelDelete (en la componente CancelButton crear estas 2 clases)
  //en cancelEdit serà con borde blu, .cancelDelete serà con borde rojo
  const button = createButton({ texto: 'Cancelar', clase: clase });

  button.addEventListener('click', () => {
    document.querySelector(father)?.remove();
  });

  return button;
};
