import { createSection } from '../../../../Utils/functions/createSection';
import { getInfoMovie } from '../../../../Utils/functions/getInfoMovie';
import { addListButton } from '../../../common/Button/AddListButton/AddListButton';

import { createButton } from '../../../common/Button/GenericButton/Button';
import { displayScreenings } from '../../Screenings/Screenings';

import { createPoster } from '../Poster/Poster';
import { watchTrailer } from '../Trailer/Trailer';
import './MovieInfo.css';

export const displayInfoMovie = (movie) => {
  const sectionMovie = createSection('main', 'movie');
  sectionMovie.style.backgroundImage = `url(${
    movie.posterBG
      ? movie.posterBG
      : 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1737479161/PopcornBCN/MoviesBG/GeneralBG_bgknna.png'
  })`;
  sectionMovie.classList.add('flexCenter');

  const h3 = document.createElement('h3');
  h3.innerText = movie.name;

  //creo div para inglobar todo el summary de la peli con sus botones
  const divAll = document.createElement('div');
  divAll.classList.add('flexCenter');

  //creo div para toda la info de la peli
  const divSummary = document.createElement('div');
  divSummary.classList.add('movieSummary', 'flexCenter');

  //creo div para poster + button favoritos
  const divPoster = document.createElement('div');
  divPoster.classList.add('flexCenter', 'divPoster');
  const poster = createPoster(movie);

  //texto, clase, type = 'button', url
  const addListButt = addListButton({
    father: divPoster,
    movie: movie,
    texto: true
  });
  divPoster.append(poster, addListButt);

  const divInfoMovie = document.createElement('div');
  divInfoMovie.className = 'infosMovie';

  const divDire = getInfoMovie('Director', movie.director);
  const divGenero = getInfoMovie('Género', movie.genre);
  const divDuration = getInfoMovie('Duración', `${movie.duration} min`);
  const divYear = getInfoMovie('Año', movie.year);
  const divDate = getInfoMovie(
    'Fecha de estreno',
    movie.releaseDate.slice(0, 10)
  );
  const divCountry = getInfoMovie('País', movie.country);
  const originalLang = getInfoMovie('Idioma original', movie.originalLang);
  const divStars = getInfoMovie('Estrellas', movie.stars);

  divInfoMovie.append(
    divDire,
    divDuration,
    divGenero,
    divYear,
    divDate,
    divCountry,
    originalLang,
    divStars
  );

  const divButtons = document.createElement('div');
  divButtons.classList.add('buttonsInfoMovie', 'flexCenter');

  const buttonTrailer = createButton({
    texto: 'Ver trailer',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736782780/PopcornBCN/play_fm8a9x.png'
  });

  buttonTrailer.addEventListener('click', () => {
    const trailer = document.querySelector('.trailer');
    if (!trailer) {
      watchTrailer(movie.trailer);
    }
  });

  const buttScreenings = createButton({
    texto: 'Ver sesiones',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736783444/PopcornBCN/cines3_mbyv1n.png'
  });

  buttScreenings.addEventListener('click', () => {
    //pinta screening
    displayScreenings(movie);
  });

  divButtons.append(buttonTrailer, buttScreenings);

  divSummary.append(divPoster, divInfoMovie);
  divAll.append(divSummary, divButtons);
  sectionMovie.append(h3, divAll);
};
