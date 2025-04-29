import { API } from '../../../../../../Utils/API/API';
import { cleanElement } from '../../../../../../Utils/functions/cleanElement';
import { getMoviesCards } from '../../../MovieCard/MovieCard';
import './Genres.css';

export const getGenres = async (select) => {
  //creo option generica para todos
  const option = document.createElement('option');
  option.innerHTML = 'Todos';
  option.value = 'Todos';
  select.append(option);

  //obtengo todos los generos disponibles en mi modelo de la BBDD
  const generos = await API({ endpoint: '/movies/genres' });

  for (const genero of generos) {
    const option = document.createElement('option');
    option.innerHTML = genero;
    option.value = genero;
    select.append(option);
  }

  select.addEventListener('change', (e) => {
    const selectGenre = e.target.value;
    cleanElement({ element: '.moviesCards', logo: false, theme: false });
    //check si tenemos tambien filtro de state, para pasarselo
    const state = document.querySelector('.state').value;
    const div = document.querySelector('.moviesCards');
    getMoviesCards({ father: div, genre: selectGenre, state: state });
  });
};
