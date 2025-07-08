import { Start } from '../../../Pages/Start/Start';
import { createButton } from '../../common/Button/GenericButton/Button';
import { createLogoutButt } from '../../common/Button/LogoutButton/LogoutButton';
import { LoginRegisterStart } from '../LoginRegister/LoginRegister';

import './MenuStart.css';
import './MenuStartResponsive.css';

export const createStartUser = (section) => {
  const divUser = document.createElement('div');
  divUser.classList.add('userStart', 'flexCenter');

  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    const p = document.createElement('p');
    p.innerText = `Hola ${user.username}! 👋 ya estás logueado.`;
    const logout = createLogoutButt({ page: Start });
    divUser.append(p, logout);
  } else {
    const p = document.createElement('p');
    p.innerText =
      'Entra en tu cuenta o regístrate para una experiencia completa';

    const login = createButton({ texto: 'Login', clase: 'loginButton' });
    const register = createButton({
      texto: 'Regístrate',
      clase: 'lightButton'
    });
    9;

    login.addEventListener('click', () => {
      const loginForm = document.querySelector('#LoginRegisterStart');
      if (!loginForm) {
        LoginRegisterStart({ start: 'Login' });
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });

        login.classList.add('displayNone');
        register.classList.add('displayNone');
      }
    });

    register.addEventListener('click', () => {
      const loginForm = document.querySelector('#LoginRegisterStart');
      if (!loginForm) {
        LoginRegisterStart({ start: 'Crear cuenta' });
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });

        login.classList.add('displayNone');
        register.classList.add('displayNone');
      }
    });

    divUser.append(p, login, register);
  }

  section.append(divUser);
};
