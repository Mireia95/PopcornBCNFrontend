import { createSelectOptions } from '../../../../common/Form/FieldForm/SelectOptions/createSelectOptions';
import './createRatingStars.css';

//funcion para crear el rating en un nuevo comment
export const createRatingStars = () => {
  //&#9734
  const options = [
    '1 - pésimo',
    '2 - malo',
    '3 - normal',
    '4 - muy bueno',
    '5 - Excelente'
  ];
  //crear select
  const ratingSelect = createSelectOptions({
    selectName: 'Como valorarías la experiencia?',
    options: options,
    values: ['1', '2', '3', '4', '5']
  });
  return ratingSelect;
};

//funcion para pintar el rating que tiene un comment especifico
//le paso movieDetail cuando es para pintar las estrellas en los detalles del movie
export const displayRatingStars = (element, movieDetail) => {
  const divRating = document.createElement('div');
  divRating.classList.add('starsRatingComment');

  //comment.stars = ? num , movie.stars = ? num
  for (let i = 1; i <= 5; i++) {
    const starIconFull = document.createElement('img');
    //si i ya ha superado el numero de rating, pero no hemos llegado a 5
    //entonces pintamos la estrella vacia
    //si no, continuamos a pintar la estrella llena
    if (i > element.stars) {
      if (movieDetail) {
        //estamos pintando la info del movie
        starIconFull.src =
          'https://res.cloudinary.com/dr2vohk2z/image/upload/c_scale,h_112,w_118/v1747115240/PopcornBCN/starwhite_qxbb68.png';
      } else {
        starIconFull.src =
          'https://res.cloudinary.com/dr2vohk2z/image/upload/v1742410562/PopcornBCN/starEmpty_g3b4gu.png';
      }

      starIconFull.alt = `rating: ${element.stars}`;
      divRating.append(starIconFull);
    } else {
      starIconFull.src =
        'https://res.cloudinary.com/dr2vohk2z/image/upload/v1742410562/PopcornBCN/star_k1aayc.png';
      starIconFull.alt = `rating: ${element.stars}`;
      divRating.append(starIconFull);
    }
  }

  return divRating;
};
