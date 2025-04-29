import { createForm } from '../../../common/Form/CreateForm/CreateForm';
import { getCinemaForm } from '../Form/CineForm';

import './NewCinema.css';

export const createNewCine = ({ father }) => {
  const divNewcine = document.createElement('div');
  divNewcine.classList.add('addCine');

  divNewcine.innerHTML = `
    <img alt="añade cine" src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1743451247/PopcornBCN/addmovie_thbyeo.png">
    <p> Añadir cine </p>`;

  divNewcine.addEventListener('click', () => {
    const form = createForm({
      funcion: getCinemaForm,
      title: 'Añadir cine'
    });
    form.classList.add('cineForm');
    father.append(form);
  });
  return divNewcine;
};
