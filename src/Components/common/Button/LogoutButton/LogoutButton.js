import { createButton } from '../GenericButton/Button';
import { displayHeader } from '../../../layouts/Header/Header';

import './LogoutButton.css';

export const createLogoutButt = ({ page, icon = true }) => {
  const button = createButton({
    texto: 'Log out',
    clase: 'logoutButt',
    url: icon
      ? 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1742124915/PopcornBCN/logout_bdk537.png'
      : null
  });

  button.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      const header = document.querySelector('header');
      if (header) {
        header.remove();
        displayHeader({ selected: 'movies' });
      }
      page(); //recargo la pagina que me interesa
    }
  });

  return button;
};
