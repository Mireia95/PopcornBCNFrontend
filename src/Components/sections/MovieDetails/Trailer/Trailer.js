import './Trailer.css';
import './TrailerResponsive.css';

import { closeButton } from '../../../common/Button/CloseButton/CloseButton';

//funcion para ver el trailer de la peli
export const watchTrailer = (trailerLink) => {
  const section = document.getElementById('movie');
  const divTrailer = document.createElement('div');
  divTrailer.className = 'trailer';
  divTrailer.innerHTML = `<iframe src=${trailerLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

  const close = closeButton({ removeEle: divTrailer, color: 'light' });
  divTrailer.append(close);
  section.append(divTrailer);
};
