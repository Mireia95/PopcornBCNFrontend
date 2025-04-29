import { closeButton } from '../../Button/CloseButton/CloseButton';
import './DoLoginPopUp.css';

export const createDoLoginPopUp = () => {
  const divDoLogin = document.createElement('div');
  divDoLogin.classList.add('flexCenter', 'divDoLogin');

  const divText = document.createElement('div');
  divText.innerHTML = `
        <img alt="logo" src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1735736068/PopcornBCN/logopopcorn_n7gggm.png"> <h4> Logueate para añadir tus películas favoritas a tu lista! </h4>
        `;

  const aMiCuenta = document.createElement('a');
  aMiCuenta.innerText = 'Ir a mi cuenta';
  aMiCuenta.href = '/user';

  aMiCuenta.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState('', '', '/user');
    //intento forzar el click al <li> del header "micuenta", para dirigirme a mi cuenta
    const liMiCuenta = document.querySelector('header .user > a');
    liMiCuenta.click();
  });

  const closeButt = closeButton({ removeEle: divDoLogin });

  divDoLogin.append(divText, aMiCuenta, closeButt);
  return divDoLogin;
};
