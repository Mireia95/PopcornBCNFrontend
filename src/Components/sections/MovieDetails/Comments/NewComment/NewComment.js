import { cleanElement } from '../../../../../Utils/functions/cleanElement';
import { getCinemas } from '../../../../../Utils/routes/Cinemas/getCinemas';
import { postComment } from '../../../../../Utils/routes/Comments/postComment';
import { getMovieById } from '../../../../../Utils/routes/Movies/getMovieById';
import { getUserById } from '../../../../../Utils/routes/User/getUserById';
import { createButton } from '../../../../common/Button/GenericButton/Button';

import { createSelectOptions } from '../../../../common/Form/FieldForm/SelectOptions/createSelectOptions';
import { loading } from '../../../../common/Loading/Loading';
import { createRatingStars } from '../RatingStars/createRatingStars';
import { displayAllComments } from '../Comments/Comments';

import './NewComment.css';

export const addNewComment = async ({ father, movie }) => {
  const form = document.createElement('form');
  form.classList.add('commentContainer'); //esta clase se puede usar para todos los comentarios. //div gris con border-radius

  //creo el select para elegir el cinema
  const cinemas = await getCinemas();
  const cinemasName = cinemas.map((cine) => cine.name);
  const cinemaSelect = createSelectOptions({
    selectName: 'Donde has visto la película?',
    options: cinemasName
  });

  const versionSelect = createSelectOptions({
    selectName: 'Que versión has visto?',
    options: ['VO', 'VOSE', 'DOLBY', '3DMAX', 'VE', '4DX', '3D']
  });

  const ratingStars = createRatingStars();

  const textarea = document.createElement('textarea');
  textarea.rows = '5';
  textarea.placeholder = 'Añade un comentario...';

  const divButton = document.createElement('div');
  divButton.classList.add('divSubmitButt');
  const buttSubmit = createButton({
    texto: 'Enviar',
    clase: 'submitButt',
    type: 'submit'
  });

  divButton.append(buttSubmit);

  form.append(cinemaSelect, versionSelect, ratingStars, textarea, divButton);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    cleanElement({ element: '.contentSimAndComm', logo: false });
    const user = JSON.parse(localStorage.getItem('user'));

    loading(father);

    await postComment({ event: e, user: user._id, movie: movie._id });

    //actualizo el user en local storage
    const userUpdate = await getUserById(user._id);
    localStorage.setItem('user', JSON.stringify(userUpdate));

    //re-renderizo los comentarios del movie
    const movieUpdated = await getMovieById(movie._id);
    displayAllComments(father, movieUpdated);
  });

  father.append(form);
};
