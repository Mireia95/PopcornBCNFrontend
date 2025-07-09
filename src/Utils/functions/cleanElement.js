import { getLogo } from '../../Components/common/Logo/Logo';
import { printPageMovies } from '../../Pages/Movies/Movies';

//funcion general que permite limpiar un elemento
export const cleanElement = async ({
  element,
  logo = true,
  logout = false
}) => {
  const ele = document.querySelector(element);
  ele.innerHTML = '';
  if (logo) {
    getLogo();
  }
  if (logout) {
    const { createLogoutButt } = await import(
      '../../Components/common/Button/LogoutButton/LogoutButton'
    );
    const main = document.querySelector('main');
    const logout = createLogoutButt({ page: printPageMovies });
    main.append(logout);
  }
};
