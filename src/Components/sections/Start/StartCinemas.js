import { printPageCinemas } from '../../../Pages/Cinemas/Cinemas';
import { createButton } from '../../common/Button/GenericButton/Button';

import { getFooter } from '../../layouts/Footer/Footer';
import { displayHeader } from '../../layouts/Header/Header';
import './MenuStart.css';
import './MenuStartResponsive.css';

export const createStartCinemas = (section) => {
  const cinesMenu = createButton({
    texto: 'Cines',
    clase: 'menuStart',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1751900911/PopcornBCN/cineSitting_cixspd.png'
  });

  cinesMenu.classList.add('flexCenter');

  cinesMenu.addEventListener('click', () => {
    displayHeader({ selected: 'cinemas' });
    window.history.pushState('', '', '/cinemas');
    printPageCinemas();
    getFooter();
  });

  section.append(cinesMenu);
};
