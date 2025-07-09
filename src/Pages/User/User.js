import { LoginRegisterForm } from '../../Components/sections/LoginRegister/Form/LoginRegisterForm';
import { getUserInfo } from '../../Components/sections/User/UserInfo/UserInfo';
import { displayUserOptions } from '../../Components/sections/User/UserOptions/UserOptions';

import { cleanElement } from '../../Utils/functions/cleanElement';
import { createSection } from '../../Utils/functions/createSection';
import './User.css';

export const printPageUser = () => {
  cleanElement({ element: 'main' });
  //chequeo que esté visible el header (ya que si no estas logueado vienes dirigido aqui tambien desde infoMovie que NO tiene el header visible)
  document.querySelector('header')?.classList.remove('displayNone');

  const section = createSection('main', 'user', 'page');
  section.innerHTML = '<h2> Mi cuenta </h2>';

  const user = JSON.parse(localStorage.getItem('user')); //recupero user logueado

  if (user) {
    getUserInfo(user, section);
    //user menu
    displayUserOptions(user);
    //creo div para contener el contenido de estas options
    const divOptionsCont = document.createElement('div');
    divOptionsCont.classList.add('divOptionsContent');
    section.append(divOptionsCont);
  } else {
    LoginRegisterForm(section, 'Login');
  }
};
