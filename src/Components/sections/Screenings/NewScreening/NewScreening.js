import { createForm } from '../../../common/Form/CreateForm/CreateForm';
import { getScreeningForm } from '../Form/ScreeningForm';

import './NewScreening.css';

export const addScreening = (movie) => {
  const main = document.querySelector('main');
  const divScreening = document.createElement('div');
  divScreening.classList.add('addScreening');

  divScreening.innerHTML = `
  <img alt="añade sesión" src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1741212012/PopcornBCN/plusScreening_zhbxlu.png">
  <p> Añadir sesión </p>`;

  divScreening.addEventListener('click', () => {
    const form = createForm({
      funcion: getScreeningForm,
      element: { movie: movie },
      title: 'Añadir sesión'
    });
    form.classList.add('screeningForm');
    main.append(form);
  });
  return divScreening;
};
