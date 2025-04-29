import { userOptions } from '../../../../Utils/Data/DataUser';
import { createButton } from '../../../common/Button/GenericButton/Button';

import './UserOptions.css';

export const displayUserOptions = (user) => {
  const userPage = document.getElementById('user');
  //elimino el backButt si hay
  document.querySelector('.backButton')
    ? document.querySelector('.backButton').remove()
    : null;

  const divCont = document.createElement('div');
  divCont.classList.add('flexCenter', 'userOptions');
  //pintar los containers de mis options, usando dataUser
  for (const option of userOptions) {
    const divOption = document.createElement('div');
    divOption.classList.add('flexCenter', 'userOption');
    const icon = document.createElement('img');
    icon.src = option.icon;
    icon.alt = option.name;

    const name = document.createElement('h4');
    name.innerText = option.name;

    const button = createButton({ texto: 'Ver' });

    button.addEventListener('click', () => {
      //quito el menu de opciones
      const divContOptions = document.querySelector('.userOptions');
      divContOptions.remove();
      option.page(user);
    });

    divOption.append(icon, name, button);
    divCont.append(divOption);
  }

  userPage.append(divCont);
};
