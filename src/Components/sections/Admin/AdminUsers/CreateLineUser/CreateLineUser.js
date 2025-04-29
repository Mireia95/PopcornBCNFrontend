import { createDeleteButt } from '../../../../common/Button/DeleteButton/DeleteButton';
import { createEditButt } from '../../../../common/Button/EditButton/EditButton';
import { createForm } from '../../../../common/Form/CreateForm/CreateForm';

import { editUserForm } from '../../../User/Form/EditUserForm/EditUserForm';

import './CreateLineUser.css';

//componente para crear los titulos de la lista de user
export const createLineUser = ({
  name = '',
  username = '',
  email = '',
  type = 'p',
  father,
  role = 'user',
  user
}) => {
  const adminPage = document.getElementById('admin');

  const line = document.createElement('div');
  line.classList.add('lineUser', 'flexCenter');
  line.innerHTML = `<${type}> ${name} </${type}> <${type}> ${username} </${type}> <${type}> ${email} </${type}> <${type} class="role"> ${role} </${type}>`;

  if (type === 'p') {
    const divButt = document.createElement('div');
    divButt.classList.add('userButtons', 'flexCenter');

    const buttEdit = createEditButt();
    buttEdit.addEventListener('click', () => {
      const editForm = createForm({
        funcion: editUserForm,
        element: { user, page: 'admin' },
        title: 'Editar user'
      });
      adminPage.append(editForm);
    });

    const buttDelete = createDeleteButt({
      textConfirm: `el user ${user.username}`,
      element: { user: user }
    });

    divButt.append(buttEdit, buttDelete);
    line.append(divButt);
  }
  if (father) {
    father.append(line);
    return father;
  } else {
    return line;
  }
};
