import { createButton } from '../GenericButton/Button';
import './SaveButton.css';

//funcion button guardar
export const createSaveButton = () => {
  const button = createButton({
    texto: 'Guardar',
    clase: 'darkButton',
    type: 'submit'
  });

  //el evento click lo gestionamos afuera
  return button;
};
