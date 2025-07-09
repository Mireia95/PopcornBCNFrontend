import { trimValueForm } from '../../../../../Utils/functions/formTrimValue';
import { editUser } from '../../../../../Utils/routes/User/editUser';
import { createinputForm } from '../../../../common/Form/FieldForm/InputForm/createInputForm';
import { createSelectOptions } from '../../../../common/Form/FieldForm/SelectOptions/createSelectOptions';

import './EditUserForm.css';
import './EditUserFormResponsive.css';

export const editUserForm = async ({ form, element }) => {
  //if element.page: "admin" -- estamos en la pagina de admin, y modificamos cualquier user, incluydo su role
  //if element.page: "user" -- estamos en la pagina de Mi cuenta, y modificamos solo algunas cosas (no role, y chequeamos su password si quiere una nueva)

  if (element.page === 'user') {
    const email = document.createElement('div');
    email.classList.add('emailUser', 'flexCenter');
    email.innerHTML = `<h4> Email: </h4> <p> ${element.user.email} </p>`;

    form.append(email);
  }

  const name = createinputForm({
    labelText: 'Nombre',
    placeholder: 'Nombre',
    value: element.user.name,
    readonly: element.page === 'admin' ? false : true
  });

  const surname = createinputForm({
    labelText: 'Apellido',
    placeholder: 'Apellido',
    value: element.user.surname,
    readonly: element.page === 'admin' ? false : true
  });

  const username = createinputForm({
    labelText: 'Username',
    placeholder: 'Username',
    value: element.user.username,
    readonly: element.page === 'admin' ? false : true
  });

  form.append(name, surname, username);

  if (element.page === 'admin') {
    const password = createinputForm({
      labelText: 'Contraseña',
      placeholder: '**********',
      value: element.user.password
    });

    const email = createinputForm({
      labelText: 'Email',
      placeholder: 'ejemplo@gmail.com',
      value: element.user.email
    });

    const role = createSelectOptions({
      selectName: 'Role',
      options: ['user', 'admin'],
      selected: element.user.role
    });

    form.append(password, email, role);
  }

  //creo evento submit del form para enviar los datos
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    trimValueForm(form);
    const [name, surname, username, email, password, role] = e.target;

    if (element.page === 'admin') {
      const body = {
        name: name.value,
        surname: surname.value,
        username: username.value,
        email: email.value ? email.value : element.user.email,
        password: password.value,
        role: role.value
      };
      await editUser({ body: body, user: element.user });
    } else {
      const body = {
        name: name.value,
        surname: surname.value,
        username: username.value
      };
      //no le paso el user, asi lo coge del localStorage
      await editUser({ body: body });
    }

    document.querySelector('.editForm')?.remove();
  });
};
