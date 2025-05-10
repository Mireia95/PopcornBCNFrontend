import { displaySinopsis } from '../Sinopsis/Sinopsis';
import './MovieSectionTab.css';
import './MovieSectionTabResponsive.css';
import { displayAllComments } from '../Comments/Comments/Comments';
import { createButton } from '../../../common/Button/GenericButton/Button';

//funcion para pintar la section 2 del movie info, con sinopsis y comentarios
export const displayMovieSectionTab = (movie) => {
  //busco el main (elemento padre)
  const main = document.querySelector('main');
  //creo section
  const section = document.createElement('section');
  section.id = 'simAndComm';

  //creo div botones para hacer switch de view (sinopsis y comments)
  const divSwitch = document.createElement('div');
  divSwitch.classList.add('flexCenter', 'divSwitch');

  const sinopsisButt = createButton({
    texto: 'SINOPSIS',
    clase: 'selected',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1740569775/PopcornBCN/sinopsis_dwgd9p.png'
  });

  const commentsButt = createButton({
    texto: 'COMENTARIOS',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1740569732/PopcornBCN/comments_lklffm.png'
  });

  //creo div que contendrà el contenido (sinopsis o comentarios)
  const divContent = document.createElement('div');
  divContent.classList.add('contentSimAndComm');
  displaySinopsis(divContent, movie);

  //eventos buttons para switch
  sinopsisButt.addEventListener('click', () => {
    sinopsisButt.classList.add('selected');
    commentsButt.classList.remove('selected');
    //pinto el contenido en el div que necesito
    displaySinopsis(divContent, movie);
  });

  commentsButt.addEventListener('click', () => {
    commentsButt.classList.add('selected');
    sinopsisButt.classList.remove('selected');
    displayAllComments(divContent, movie);
  });

  divSwitch.append(sinopsisButt, commentsButt);
  section.append(divSwitch, divContent);
  main.append(section);
};
