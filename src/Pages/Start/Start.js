import { createLogo } from '../../Components/common/Logo/Logo';
import { addImage } from '../../Utils/functions/addImage';
import { createSection } from '../../Utils/functions/createSection';
import { createButton } from '../../Components/common/Button/GenericButton/Button';
import './Start.css';
import '../../Components/Styles/Anims/Anims.css';
import { createStartCinemas } from '../../Components/sections/Start/StartCinemas';
import { createStartMovies } from '../../Components/sections/Start/StartMovies';
import { createStartUser } from '../../Components/sections/Start/StartUser';

export const Start = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  //si ya existe el header, quitalo
  const header = document.querySelector('header');
  if (header) {
    header.remove();
  }
  const section = createSection('main', 'start');
  section.className = 'flexCenter';

  const divBG = document.createElement('div');
  divBG.className = 'startBG';

  /* div contenente H1, LOGO, BUTTONS */
  const div = document.createElement('div');
  div.className = 'start';
  const title = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.textContent = 'PopcornBCN';
  const logo = createLogo();

  const h2 = document.createElement('h2');
  h2.textContent =
    'Descubre todas las peliculas estrenadas en los cines de Barcelona, y más!';

  const sectionMenu = createSection('main', 'menuStart');
  sectionMenu.className = 'flexCenter';
  const divMenu = document.createElement('div');
  divMenu.classList.add('flexCenter', 'divMenu');
  const sections = document.createElement('div');
  sections.classList.add('sectionsMenu', 'flexCenter');
  createStartMovies(sections);
  createStartCinemas(sections);
  const h4 = document.createElement('h4');
  h4.innerText = 'Haz click en una de las sesiones y explora lo que necesites!';
  divMenu.append(sections, h4);
  sectionMenu.append(divMenu);
  createStartUser(sectionMenu);

  //creo el boton para deslizar hacia abajo
  const scrollButt = createButton({
    texto: 'Desliza hacía abajo',
    clase: 'scroll'
  });

  const scrollButtImg = addImage(
    'scroll',
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1737038635/PopcornBCN/arrowDownStart_xwtf6u.png'
  );
  scrollButtImg.classList.add('scrollAnim');
  scrollButt.append(scrollButtImg);

  scrollButt.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  title.append(h1, logo);
  div.append(title, h2);
  section.append(div, scrollButt);
  main.append(divBG);
};
