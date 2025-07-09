import { printPageMovies } from '../../../../Pages/Movies/Movies';
import { defaultImages } from '../../../../Utils/Data/DefaultImages';
import { addImage } from '../../../../Utils/functions/addImage';
import { createLogoutButt } from '../../../common/Button/LogoutButton/LogoutButton';

import { updateImgUser } from '../UserUpdateImg/UserUpdateImg';
import './UserInfo.css';
import './UserInfoResponsive.css';

export const getUserInfo = (user, section) => {
  //pinto info del user
  const divUser = document.createElement('div');
  divUser.classList.add('flexCenter', 'divUser');

  const divImgUser = document.createElement('div');
  divImgUser.classList.add('imgUser');
  const imgUser = addImage('imagen user', user.image || defaultImages.user);

  const divInfo = document.createElement('div');
  divInfo.classList.add('infoUser', 'flexCenter');
  const name = document.createElement('h4');
  name.innerHTML = `Hola <b> ${user.username} </b> <img alt="hola" src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1742068203/PopcornBCN/hello_uyxgws.png">`;

  //creo form para actualizar la imagen del user, acepta los tipos de imagen que acepta mi backend
  const updateImgForm = updateImgUser();

  const buttLogout = createLogoutButt({ page: printPageMovies });

  divInfo.append(name, updateImgForm);
  divImgUser.append(imgUser);

  divUser.append(divImgUser, divInfo, buttLogout);

  section.append(divUser);
};
