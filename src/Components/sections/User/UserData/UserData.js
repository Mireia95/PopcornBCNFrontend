import { createBackButton } from '../../../common/Button/BackButton/BackButton';
import { createDeleteButt } from '../../../common/Button/DeleteButton/DeleteButton';
import { createButton } from '../../../common/Button/GenericButton/Button';
import { createForm } from '../../../common/Form/CreateForm/CreateForm';
import { editUserForm } from '../Form/EditUserForm/EditUserForm';
import { displayUserEditPass } from '../UserEditPass/UserEditPass';
import { displayUserOptions } from '../UserOptions/UserOptions';
import './UserData.css';

export const displayUserData = (user) => {
  const userPage = document.getElementById('user');
  const divOptionContent = document.querySelector('.divOptionsContent');
  divOptionContent.innerHTML = '';
  const divUserData = document.createElement('div');
  divUserData.classList.add('userData');
  divOptionContent.append(divUserData);

  //IMPO: no pasar el user como prop, para que lo coja del localStorage en editUser.js
  const editForm = createForm({
    funcion: editUserForm,
    element: { user, page: 'user' },
    title: 'Mis datos'
  });
  editForm.classList.remove('form');
  editForm.classList.add('userForm');
  divUserData.append(editForm);

  //editar contraseña
  const divEditPassw = document.createElement('div');
  divEditPassw.classList.add('editPass');
  const editPassh3 = document.createElement('h3');
  editPassh3.innerText = 'Pulsa aquí para modificar tu contraseña:';
  const passwordButt = createButton({ texto: 'Modificar contraseña' });

  passwordButt.addEventListener('click', () => {
    //abrimos para modificar contraseña
    passwordButt.classList.add('displayNone');
    displayUserEditPass({ father: divEditPassw });
  });

  divEditPassw.append(editPassh3, passwordButt);
  divUserData.append(divEditPassw);

  //creo boton eliminar pelicula
  const divDeleteUser = document.createElement('div');
  divDeleteUser.classList.add('deleteUser');
  const deleteUserh3 = document.createElement('h3');
  deleteUserh3.innerText = 'Quieres eliminar tu cuenta?';

  const deleteButt = createDeleteButt({
    textButt: 'cuenta',
    textConfirm: 'tu cuenta',
    element: { user: user }
  });
  divDeleteUser.append(deleteUserh3, deleteButt);
  divUserData.append(divDeleteUser);

  const backButt = createBackButton({
    clean: '.divOptionsContent',
    funcion: () => displayUserOptions(user),
    header: false,
    logo: false
  });

  userPage.append(backButt);
};
