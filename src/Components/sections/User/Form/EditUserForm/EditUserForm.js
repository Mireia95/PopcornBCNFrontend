import { editUser } from '../../../../../Utils/routes/User/editUser';
import { createinputForm } from '../../../../common/Form/FieldForm/InputForm/createInputForm';
import { createSelectOptions } from '../../../../common/Form/FieldForm/SelectOptions/createSelectOptions';

import './EditUserForm.css';
import './EditUserFormResponsive.css';

export const editUserForm = async ({ form, element }) => {
  //if element.page: "admin" -- estaos en la pagina de admin, y modificamos cualquier user, incluydo su role
  //if element.page: "user" -- estamos en la pagina de Mi cuenta, y modificamos solo algunas cosas (no role, y chequeamos su password si quiere una nueva)

  const name = createinputForm({
    labelText: 'Nombre',
    placeholder: 'Nombre',
    value: element.user.name
  });

  const surname = createinputForm({
    labelText: 'Apellido',
    placeholder: 'Apellido',
    value: element.user.surname
  });

  const username = createinputForm({
    labelText: 'Username',
    placeholder: 'Username',
    value: element.user.username
  });

  const email = createinputForm({
    labelText: 'Email',
    placeholder: 'ejemplo@gmail.com',
    value: element.user.email
  });

  form.append(name, surname, username, email);

  if (element.page === 'admin') {
    const password = createinputForm({
      labelText: 'Contraseña',
      placeholder: '**********',
      value: element.user.password
    });

    const role = createSelectOptions({
      selectName: 'Role',
      options: ['user', 'admin'],
      selected: element.user.role
    });

    form.append(password, role);
  }

  //creo evento submit del form para enviar los datos
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [name, surname, username, email, password, role] = e.target;

    if (element.page === 'admin') {
      const body = {
        name: name.value,
        surname: surname.value,
        username: username.value,
        email: email.value,
        password: password.value,
        role: role.value
      };
      await editUser({ body: body, user: element.user });
    } else {
      const body = {
        name: name.value,
        surname: surname.value,
        username: username.value,
        email: email.value
      };
      //no le paso el user, asi lo coge del localStorage
      await editUser({ body: body });
    }

    document.querySelector('.editForm')?.remove(); //elimino el editForm
  });
};
