import { createSection } from '../../../Utils/functions/createSection';
import { LoginRegisterForm } from './Form/LoginRegisterForm';
import { createScrollUpButton } from '../../common/Button/ScrollUpButton/ScrollUpButton';

import './LoginRegister.css';
import './LoginRegisterResponsive.css';

/* funcion para la seccion de LoginRegister del INICIO.
Se tiene que activar al hacer click al button "Login" del START */
export const LoginRegisterStart = ({ start = 'Login' }) => {
  const section = createSection('main', 'loginUser');

  const loginDiv = document.createElement('div');
  loginDiv.classList.add('flexCenter');
  loginDiv.id = 'LoginRegisterStart';

  //dentro il loginDiv vamos a pintar el login/CrearCuenta
  LoginRegisterForm(loginDiv, start); //empezamos mostrando el login

  //arrow para volver arriba
  const scrollUp = createScrollUpButton();

  section.append(loginDiv, scrollUp);
};
