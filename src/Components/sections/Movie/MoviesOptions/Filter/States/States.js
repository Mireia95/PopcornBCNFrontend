import { API } from '../../../../../../Utils/API/API';
import { cleanElement } from '../../../../../../Utils/functions/cleanElement';
import { getMoviesCards } from '../../../MovieCard/MovieCard';
import './States.css';

export const getStates = async (select) => {
  //creo option generica para todos
  const option = document.createElement('option');
  option.innerHTML = 'Todos';
  option.value = 'Todos';
  select.append(option);

  //obtengo todos los generos disponibles en mi modelo de la BBDD
  const states = await API({ endpoint: '/movies/states' });

  for (const state of states) {
    const option = document.createElement('option');
    option.innerHTML = state;
    option.value = state;
    select.append(option);
  }

  select.addEventListener('change', (e) => {
    const selectState = e.target.value;
    cleanElement({ element: '.moviesCards', logo: false, theme: false });
    //check si tenemos tambien filtro de genero, para pasarselo
    const genre = document.querySelector('.genre').value;
    const div = document.querySelector('.moviesCards');
    getMoviesCards({ father: div, state: selectState, genre: genre });
  });
};
