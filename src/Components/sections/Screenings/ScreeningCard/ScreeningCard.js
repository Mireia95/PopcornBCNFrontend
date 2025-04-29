import { createEditButt } from '../../../common/Button/EditButton/EditButton';
import { createAddress } from '../../Cinemas/Address/Address';

import './ScreeningCard.css';
import { getScreeningForm } from '../Form/ScreeningForm';
import { createForm } from '../../../common/Form/CreateForm/CreateForm';

export const createScreeningCard = ({ screening, movie }) => {
  //creo el screening
  const divScreening = document.createElement('div');
  divScreening.classList.add('screening');
  const h4 = document.createElement('h4');
  h4.innerText = screening.cinema.name;

  const address = createAddress(screening.cinema.address);

  const versions = document.createElement('div');
  versions.classList.add('versions');
  const versionsTitle = document.createElement('p');
  versionsTitle.innerText = 'Versiones: ';
  versions.append(versionsTitle);

  for (const version of screening.version) {
    const pVersion = document.createElement('p');
    pVersion.innerText = version;
    pVersion.classList.add('screeningVersion');
    versions.append(pVersion);
  }

  const price = document.createElement('div');

  price.innerHTML = `<p> Precio Standard: </p> <p class="screeningPrice"> ${screening.price} </p>`;

  const linkWeb = document.createElement('a');
  linkWeb.classList.add('flexCenter');
  linkWeb.href = screening.link;
  linkWeb.target = '_blank';
  linkWeb.innerHTML =
    '<img alt="ir a la web" src= "https://res.cloudinary.com/dr2vohk2z/image/upload/v1742857638/PopcornBCN/navigateLight_jodfv6.png"> Comprar en la web';

  divScreening.append(h4, address, versions, price, linkWeb);

  //if user es admin, add edit screening
  //creo button editar para los admins
  const user = JSON.parse(localStorage.getItem('user')); //chequeo si el user es admin
  if (user && user.role === 'admin') {
    const editButt = createEditButt();
    editButt.addEventListener('click', () => {
      //llamo a la funcion createForm general, que llamarà a su vez screeningForm
      const form = createForm({
        funcion: getScreeningForm,
        element: { movie: movie, action: 'edit', screening: screening },
        title: 'Editar sesión'
      });
      form.classList.add('screeningForm');
      document.querySelector('main').append(form);
    });
    divScreening.append(editButt);
  }

  return divScreening;
};
