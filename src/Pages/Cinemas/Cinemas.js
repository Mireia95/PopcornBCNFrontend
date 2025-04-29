import { loading } from '../../Components/common/Loading/Loading';
import { cleanElement } from '../../Utils/functions/cleanElement';
import { createSection } from '../../Utils/functions/createSection';
import './Cinemas.css';
import { displayCinemas } from '../../Components/sections/Cinemas/CinemasList/CinemasList';

export const printPageCinemas = () => {
  cleanElement({ element: 'main' });
  const section = createSection('main', 'cinemas', 'page');
  section.innerHTML = '<h2> CINES </h2>';
  loading(section);
  displayCinemas(section);
};
