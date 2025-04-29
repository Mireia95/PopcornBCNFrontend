import { loading } from '../../Components/common/Loading/Loading';
import { getMoviesCards } from '../../Components/sections/Movie/MovieCard/MovieCard';
import { createOptions } from '../../Components/sections/Movie/MoviesOptions/Options/MovieOptions';

import { cleanElement } from '../../Utils/functions/cleanElement';
import { createSection } from '../../Utils/functions/createSection';
import './Movies.css';

export const printPageMovies = () => {
  cleanElement({ element: 'main' });
  const section = createSection('main', 'movies', 'page');
  section.innerHTML = '<h2> PELÍCULAS </h2>';

  const divOptions = createOptions();

  const divAllCards = document.createElement('div'); //div que incluye todas las pelis
  divAllCards.classList.add('moviesCards', 'flexCenter');

  section.append(divOptions);
  section.append(divAllCards);

  loading(divAllCards);
  getMoviesCards({ father: divAllCards });
};
