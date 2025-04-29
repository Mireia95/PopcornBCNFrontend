import { printPageMovies } from '../../../Pages/Movies/Movies';
import { createButton } from '../../common/Button/GenericButton/Button';
import { getFooter } from '../../layouts/Footer/Footer';
import { displayHeader } from '../../layouts/Header/Header';

import './MenuStart.css';
export const createStartMovies = (section) => {
  const moviesMenu = createButton({
    texto: 'Películas',
    clase: 'menuStart',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1741719326/PopcornBCN/pelicula_il8obm.png'
  });

  moviesMenu.classList.add('flexCenter');

  moviesMenu.addEventListener('click', () => {
    displayHeader({ selected: 'movies' });
    window.history.pushState('', '', '/movies');
    printPageMovies();
    getFooter();
  });

  section.append(moviesMenu);
};
