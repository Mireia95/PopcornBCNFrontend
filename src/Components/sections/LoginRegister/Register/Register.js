import { API } from '../../../../Utils/API/API';
import { displayErrorRequest } from '../../../common/Form/ErrorRequest/ErrorRequest';
import { confRegister } from '../ConfRegister/ConfRegister';

import './Register.css';

//funcion para registrar el usuario
export const doRegister = async (e) => {
  e.preventDefault(); //evito que se recargue la página
  const [username, nombre, apellido, email, password] = e.target;
  const body = {
    username: username.value,
    name: nombre.value,
    surname: apellido.value,
    email: email.value,
    password: password.value
  };

  const res = await API({
    endpoint: '/users/register',
    body,
    method: 'POST'
  });

  if (typeof res === 'string') {
    //quiere decir que hay un error. Si no devuelve el objeto user.
    //pinto el error, chequeando en que form estamos, para saber donde pintar el error
    const form =
      document.querySelector('#LoginRegisterStart > form') ||
      document.querySelector('#user > form');
    displayErrorRequest({ father: form, error: res });
  } else {
    const section =
      document.getElementById('LoginRegisterStart') ||
      document.getElementById('user');
    confRegister(section, res, password.value);
  }
};
