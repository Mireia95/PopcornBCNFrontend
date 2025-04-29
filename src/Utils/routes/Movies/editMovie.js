import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { printPageMovies } from '../../../Pages/Movies/Movies';
import { API } from '../../API/API';

//funcion para editar una pelicula
export const editMovie = async ({ e, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));

  const [
    name,
    director,
    ,
    ,
    country,
    originalLanguage,
    duration,
    year,
    releaseDate,
    state,
    description
  ] = e.target;

  //subo elementos de la petición
  const body = new FormData();
  body.append('name', name.value),
    body.append('director', director.value),
    body.append('country', country.value),
    body.append('originalLanguage', originalLanguage.value),
    body.append('duration', duration.value),
    body.append('year', year.value),
    body.append('releaseDate', releaseDate.value),
    body.append('state', state.value),
    body.append('description', description.value);

  //le paso el poster
  const posterForm = document.getElementById('poster');
  if (posterForm.files[0]) {
    //quiere decir que hemos subido un nuevo archivo
    body.append('poster', posterForm.files[0]);
  }

  //le paso el poster BG
  const posterBGForm = document.getElementById('posterBG');
  if (posterBGForm.files[0]) {
    //quiere decir que hemos subido un nuevo archivo
    body.append('posterBG', posterBGForm.files[0]);
  }

  //le paso el trailer
  const trailer = document.getElementById('trailer');
  if (trailer) {
    body.append('trailer', trailer.value);
  }

  //le paso los generos seleccionados en el form
  //recupero los inputs seleccionados
  const genresSelected = document.querySelectorAll(
    "input[name='genre']:checked"
  );

  //con un ciclo for of recupero los valores de los inputs, y los añado al array genresValues
  for (const genre of genresSelected) {
    body.append('genre[]', genre.value);
  }

  const response = await API({
    endpoint: `/movies/${movie}`,
    method: 'PUT',
    isJson: false,
    token: token,
    body
  });
  console.log(response);

  if (response.movie) {
    //quiere decir que ha funcionadio la petición
    const moviesCards = document.querySelector('.moviesCards');
    document.querySelector('.form')?.remove(); //elimino el editForm
    //pinto el popup de confirmacion
    const popup = createConfirmPopup({
      texto: 'Película editada correctamente!',
      button: true,
      page: printPageMovies
    });
    moviesCards.append(popup);
  } else {
    const editForm = document.querySelector('.form');
    displayErrorRequest({ father: editForm, error: response.message });
  }
  return response;
};
