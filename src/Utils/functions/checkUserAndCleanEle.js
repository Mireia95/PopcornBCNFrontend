import { cleanElement } from './cleanElement';

export const checkUserAndCleanEle = ({ element = 'main', logo = true }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  //si hay user logueado, pinto tambien el boton de logout
  if (user) {
    cleanElement({ element: element, logo, logout: true });
  } else {
    cleanElement({ element: element, logo });
  }
};
