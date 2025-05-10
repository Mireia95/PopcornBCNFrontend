import { menuHeader } from '../../../Utils/Data/DataHeader';
import { addClassActive } from '../../../Utils/functions/addClass';
import { addImage } from '../../../Utils/functions/addImage';
import { navigate } from '../../../Utils/functions/navigate';
import './Header.css';
import './HeaderResponsive.css';

export const displayHeader = ({ selected = 'movies' }) => {
  const divApp = document.querySelector('#app');
  const main = document.querySelector('main');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.className = 'flexCenter';

  const user = JSON.parse(localStorage.getItem('user')); //busco user si se ha logueado
  //guardo el role del user para pìntar mi header
  const roleUser = user?.user?.role || user?.role || 'user'; //si el user existe, le doy valor user.role. Si no le doy valor por defecto user

  menuHeader.forEach((option, index) => {
    if (roleUser === 'admin' || option.role === roleUser) {
      const li = document.createElement('li');
      li.classList.add(option.class);

      //si en START seleccionamos "peliculas", estará seleccionada esta opcion
      //si no seleccionaremos "cinemas"
      if (selected == 'movies') {
        if (index === 0) {
          li.classList.add('active');
        }
      } else {
        if (index === 1) {
          li.classList.add('active');
        }
      }
      const a = createLinkHeader(option.name, option.icon, option.path);

      a.addEventListener('click', (e) => {
        addClassActive(li);
        navigate(e, option);
      });

      li.append(a);
      ul.append(li);
    }
  });

  nav.append(ul);
  header.append(nav);
  divApp.insertBefore(header, main);
};

//función para crear los <li> del header
const createLinkHeader = (name, icon, path) => {
  const a = document.createElement('a');
  const img = addImage(name, icon);
  const p = document.createElement('p');

  a.className = 'flexCenter';
  p.innerText = name;
  a.href = path;

  a.append(img, p);
  return a;
};
