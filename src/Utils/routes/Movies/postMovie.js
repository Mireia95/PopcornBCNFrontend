import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';

import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { getMoviesCards } from '../../../Components/sections/Movie/MovieCard/MovieCard';
import { API } from '../../API/API';

export const postMovie = async (event) => {
  const token = JSON.parse(localStorage.getItem('token'));

  //el body tiene que recibir
  // user: consiguelo con local.storage
  //name
  //director
  //image
  //description
  //genre
  //duration
  //releaseDate
  //year
  //country
  //originalLang
  //state
  //trailer
  //posterBG

  //recogo la info que me llega del form
  const [
    name,
    director,
    image,
    posterBG,
    country,
    originalLang,
    duration,
    year,
    releaseDate,
    state,
    description,
    trailer
  ] = event.target;

  //recupero los generos checkeados por el admin
  const selectedGenres = [
    ...event.target.querySelectorAll('input[name="genre"]:checked')
  ].map((input) => input.value);

  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('director', director.value);
  formData.append('image', image.files[0]);
  formData.append('description', description.value);

  //añadimos los genres,que es un array de valores
  selectedGenres.forEach((genre) => {
    formData.append('genre', genre);
  });
  formData.append('duration', duration.value);
  formData.append('releaseDate', releaseDate.value);
  formData.append('year', year.value);
  formData.append('country', country.value);
  formData.append('originalLang', originalLang.value);
  formData.append('state', state.value);
  formData.append('trailer', trailer.value);
  formData.append('posterBG', posterBG.files[0]);

  const newMovie = await API({
    endpoint: '/movies',
    method: 'POST',
    isJson: false,
    token: token,
    body: formData
  });

  if (newMovie.movie) {
    const divMovieCards = document.querySelector('.moviesCards'); //recupero div con los movies
    document.querySelector('.editForm')?.remove(); //elimino el form
    //pinto el popup de confirmacion
    const popup = createConfirmPopup({
      texto: 'Pelicula creada correctamente!',
      button: true,
      page: () => getMoviesCards({ father: divMovieCards })
    });

    divMovieCards.append(popup);
  } else {
    const editForm = document.querySelector('.editForm');
    displayErrorRequest({ father: editForm, error: res.message });
  }
};
