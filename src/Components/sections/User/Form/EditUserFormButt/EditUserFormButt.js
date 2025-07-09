import { createCancButton } from '../../../../common/Button/CancelButton/CancelButton';
import { createEditButt } from '../../../../common/Button/EditButton/EditButton';
import { createSaveButton } from '../../../../common/Button/SaveButton/SaveButton';
import './EditUserFormButt.css';

export const displayEditUserFormButt = () => {
  //creo buttons para editform
  const divButtons = document.querySelector('.divButtons');
  const editButton = createEditButt('Modificar');
  divButtons.append(editButton);

  let editData = false;

  editButton.addEventListener('click', () => {
    const allInputs = document.querySelectorAll('.fieldForm > input');
    if (!editData) {
      editData = true;
      editButton.classList.add('displayNone');

      allInputs.forEach((input) => {
        input.readOnly = false;
        input.minLength = 3;
      });

      //creo button Cancelar usar
      const cancButt = createCancButton({
        father: '.form',
        clase: 'cancelEdit'
      });

      //creo button Guardar
      const saveButt = createSaveButton();
      saveButt.classList.add('saveButt');

      divButtons.append(cancButt, saveButt);

      cancButt.addEventListener('click', () => {
        editData = false;
        editButton.classList.remove('displayNone');
        allInputs.forEach((input) => {
          input.readOnly = true;
        });
        document.querySelector('.cancelEdit')?.remove();
        document.querySelector('.saveButt')?.remove();
      });
    }
  });
};
