import { createButton } from '../../../common/Button/GenericButton/Button';
import { createForm } from '../../../common/Form/CreateForm/CreateForm';

import { addMovieForm } from '../Form/AddMovieForm/AddMovieForm';

import './NewMovieCard.css';

//crear la card para añadir el movie
export const createNewMovieCard = () => {
  const divNewCard = document.createElement('div');
  divNewCard.classList.add('movieCard', 'addMovie');

  const buttAddMovie = createButton({
    texto: 'Añadir película',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1743451247/PopcornBCN/addmovie_thbyeo.png',
    clase: 'addMovieButt'
  });

  buttAddMovie.addEventListener('click', () => {
    console.log('Añadimos movie');
    //llamo a la funcion editForm general que crea el form, que llamarà a su vez editMovieForm, que sirve tambien para añadir movies
    const form = createForm({
      funcion: addMovieForm,
      title: 'Crear nueva película'
    });
    const moviesPage = document.getElementById('movies');
    moviesPage.append(form);
  });

  divNewCard.append(buttAddMovie);
  return divNewCard;
};
