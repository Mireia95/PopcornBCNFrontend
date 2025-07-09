import { createCancButton } from '../../Button/CancelButton/CancelButton';
import { createSaveButton } from '../../Button/SaveButton/SaveButton';
import './CreateForm.css';
import './CreateFormResponsive.css';

//funcion que me permite crear un form generico, que a su vez llama la funcion pasada por props para rellenar el formulario creado dependiendo de que inputs y submit necesitamos
export const createForm = ({ funcion, element, title, submitButt = true }) => {
  const div = document.createElement('div');
  div.classList.add('form');

  const h3 = document.createElement('h3');
  h3.innerText = title;

  div.append(h3);

  const form = document.createElement('form');

  //llamo a la funcion para crear el form que necesito
  funcion({ form: form, element: element }).then(() => {
    //creo div para buttons cancelar + guardar
    const divButtons = document.createElement('div');
    divButtons.classList.add('divButtons');

    if (submitButt === true) {
      //creo button Cancelar usar createCancButton
      const cancButt = createCancButton({
        father: '.form',
        clase: 'cancelEdit'
      });
      //creo button Guardar
      const saveButt = createSaveButton();
      divButtons.append(cancButt, saveButt);
    }

    form.append(divButtons);
  });

  div.append(form);

  return div;
};
