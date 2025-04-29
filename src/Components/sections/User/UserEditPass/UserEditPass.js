import { editUser } from '../../../../Utils/routes/User/editUser';
import { createCancButton } from '../../../common/Button/CancelButton/CancelButton';
import { createButton } from '../../../common/Button/GenericButton/Button';
import { createSaveButton } from '../../../common/Button/SaveButton/SaveButton';
import { createinputForm } from '../../../common/Form/FieldForm/InputForm/createInputForm';
import './UserEditPass.css';

export const displayUserEditPass = ({ father }) => {
  //creo form
  const form = document.createElement('form');
  //input para contraseña actual
  const currentPass = createinputForm({
    labelText: 'Contraseña actual',
    placeholder: '*******',
    type: 'password',
    name: 'password'
  });

  //input para nueva contraseña
  const newPass = createinputForm({
    labelText: 'Nueva contraseña',
    placeholder: '*******',
    type: 'password',
    name: 'newPassword'
  });

  //buttons
  const divButts = document.createElement('div');
  divButts.classList.add('divButtons');

  //button submit
  const submitButt = createSaveButton();
  //button canc
  //creo button Cancelar usar createCancButton
  const cancelButt = createCancButton({
    father: '.form',
    clase: 'cancelEdit'
  });

  cancelButt.addEventListener('click', () => {
    document.querySelector('.editPass > form')?.remove();
    document
      .querySelector('.editPass > button')
      ?.classList.remove('displayNone');
  });

  divButts.append(cancelButt, submitButt);
  form.append(currentPass, newPass, divButts);
  father.append(form);

  //submis form
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { password, newPassword } = e.target;
    const body = {
      password: password.value,
      newPassword: newPassword.value
    };
    //!udpateUser
    //no le paso el user, asi lo coge del localStorage
    await editUser({ body: body });
  });

  console.log('modificamos la contraseña');
};
