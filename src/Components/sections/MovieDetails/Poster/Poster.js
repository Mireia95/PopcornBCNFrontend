import { defaultImages } from '../../../../Utils/Data/DefaultImages';
import { addImage } from '../../../../Utils/functions/addImage';

export const createPoster = (movie) => {
  const poster = addImage(
    'poster pelicula',
    movie.image || defaultImages.moviePosterBG
  );
  return poster;
};
