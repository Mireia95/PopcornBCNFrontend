import { loading } from '../../Components/common/Loading/Loading';
import { createSection } from '../../Utils/functions/createSection';
import './Cinemas.css';
import { displayCinemas } from '../../Components/sections/Cinemas/CinemasList/CinemasList';
import { checkUserAndCleanEle } from '../../Utils/functions/checkUserAndCleanEle';

export const printPageCinemas = () => {
  //limpio main y chequeo si user está logueado
  checkUserAndCleanEle({ element: 'main' });
  const section = createSection('main', 'cinemas', 'page');
  section.innerHTML = '<h2> CINES </h2>';

  const cinemasList = document.createElement('div');
  cinemasList.classList.add('cinemaList', 'flexCenter');

  section.append(cinemasList);
  loading(cinemasList);
  displayCinemas(section);
};
