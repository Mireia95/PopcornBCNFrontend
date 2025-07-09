import { printPageMovies } from '../../../../Pages/Movies/Movies';
import { API } from '../../../../Utils/API/API';
import { displayErrorRequest } from '../../../common/Form/ErrorRequest/ErrorRequest';

import { getFooter } from '../../../layouts/Footer/Footer';
import { displayHeader } from '../../../layouts/Header/Header';

import './Login.css';

//funcion para el login del usuario
export const doLogin = async ({ e, userLogin, password }) => {
  /*  le paso como propriedad:
  - e: el evento si estamos haciendo el login desde el form
  - userLogin y passowrd: despues de un register de un usuario, hago el login automatico con este nuevo user despues de haberlo registrado, para obtener así el token y entrar en mi web. Pero para hacer el login necesito el username y el password no criptado del user que se acaba de registrar, por eso se lo paso a esta funcion
*/

  if (e) {
    e.preventDefault();
  }

  const body = {};

  if (userLogin) {
    body.username = userLogin.username;
    body.password = password;
  } else {
    const [username, password] = e.target;
    body.username = username.value;
    body.password = password.value;
  }

  const res = await API({
    endpoint: '/users/login',
    body,
    method: 'POST'
  });

  document.querySelector('.loading')?.remove();

  if (!res.user) {
    //si no ha ido bien el login enseña el error
    //chequeo en que form estamos para saber donde pintar el error
    const form =
      document.querySelector('#LoginRegisterStart > form') ||
      document.querySelector('#user > form');
    displayErrorRequest({ father: form, error: res });
  } else {
    localStorage.setItem('user', JSON.stringify(res.user));
    localStorage.setItem('token', JSON.stringify(res.token));

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) {
      header.remove();
    }
    displayHeader({ selected: 'movies' });
    printPageMovies();

    if (!footer) {
      getFooter();
    }
  }
};
