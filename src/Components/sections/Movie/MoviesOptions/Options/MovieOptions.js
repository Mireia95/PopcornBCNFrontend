import { createFilters } from '../Filter/Filter';
import { getMyList } from '../MyList/MyList';

import './MovieOptions.css';

//options para la pagina Movies
export const createOptions = () => {
  const divOptions = document.createElement('div');
  divOptions.classList.add('flexCenter', 'options');

  const myList = getMyList();

  const divFilter = createFilters(); //filtros

  //Añadir el input search para buscar la pelicula
  //const divSearch = createSearch(); //busqueda
  //divOptions.append(divFilter, divSearch);

  divOptions.append(myList, divFilter);
  return divOptions;
};
