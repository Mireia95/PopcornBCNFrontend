import { getScreeningByMovie } from '../../../Utils/routes/Screenings/getScreeningByMovie';
import { closeButton } from '../../common/Button/CloseButton/CloseButton';
import { createScreeningCard } from './ScreeningCard/ScreeningCard';
import { addScreening } from './NewScreening/NewScreening';

import './Screenings.css';

export const displayScreenings = async (movie) => {
  const screenings = await getScreeningByMovie(movie);
  const main = document.querySelector('main');
  //al hacer una peticion de screening estoy llamando de nuevo esta funcion para pintar los screenings. Para evitar que se pinten duplicados, si ya existen los borro para luego pintarlos otra vez actualizados
  document.querySelector('.screeningsContainer')?.remove();

  const screeningsCont = document.createElement('div');
  screeningsCont.classList.add('screeningsContainer');

  const h3 = document.createElement('h3');
  h3.innerText = 'SESIONES';

  const divScreenings = document.createElement('div'); //div que contiene todos los screenings

  for (const screening of screenings) {
    const divScreening = createScreeningCard({
      screening: screening,
      movie: movie
    });
    divScreenings.append(divScreening);
  }

  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.role === 'admin') {
    const newScreening = addScreening(movie);
    divScreenings.append(newScreening);
  }

  const buttClose = closeButton({
    removeEle: screeningsCont
  });

  const buttCloseDown = closeButton({
    removeEle: screeningsCont,
    image: false
  });
  buttCloseDown.classList.remove('close');
  buttCloseDown.classList.add('buttClose');

  screeningsCont.append(h3, divScreenings, buttClose, buttCloseDown);
  main.append(screeningsCont);
};
