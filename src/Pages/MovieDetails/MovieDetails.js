import { createBackButton } from '../../Components/common/Button/BackButton/BackButton';
import { displayInfoMovie } from '../../Components/sections/MovieDetails/InfoSectionMovie/MovieInfo';
import { displayMovieSectionTab } from '../../Components/sections/MovieDetails/MovieSectionTab/MovieSectionTab';

import { cleanElement } from '../../Utils/functions/cleanElement';
import { printPageMovies } from '../Movies/Movies';

import './MovieDetails.css';

export const displayMovieDetails = (movie) => {
  cleanElement({ element: 'main' });
  const main = document.querySelector('main');

  const header = document.querySelector('header');
  header.classList.add('displayNone');

  const logo = document.querySelector('.logo');
  logo.classList.add('displayNone');

  /* la primera section  */
  displayInfoMovie(movie);

  /* la segunda section */
  displayMovieSectionTab(movie);

  // button volver
  const buttonBack = createBackButton({ funcion: printPageMovies });
  main.append(buttonBack);
};
