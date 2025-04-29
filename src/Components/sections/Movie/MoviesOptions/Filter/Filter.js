import './Filter.css';
import { getGenres } from './Genres/Genres';
import { getStates } from './States/States';

export const createFilters = () => {
  const divFilters = document.createElement('div');
  divFilters.className = 'filters';

  const filterGenre = document.createElement('select');
  filterGenre.classList.add('genre');
  filterGenre.innerHTML = '<option disabled selected> GÉNERO </option>';
  getGenres(filterGenre);

  const filterState = document.createElement('select');
  filterState.classList.add('state');
  filterState.innerHTML = '<option disabled selected> ESTADO </option>';
  getStates(filterState);

  divFilters.append(filterGenre, filterState);

  return divFilters;
};
