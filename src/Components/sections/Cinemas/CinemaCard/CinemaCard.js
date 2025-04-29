import { createDeleteButt } from '../../../common/Button/DeleteButton/DeleteButton';
import { createEditButt } from '../../../common/Button/EditButton/EditButton';
import { createForm } from '../../../common/Form/CreateForm/CreateForm';
import { createAddress } from '../Address/Address';
import { getCinemaForm } from '../Form/CineForm';
import './CinemaCard.css';

export const createCinemaCard = (cinema) => {
  const divCine = document.createElement('div');
  divCine.className = 'cine';

  const divImg = document.createElement('div');
  divImg.className = 'flexCenter';
  const iconImg = document.createElement('img');
  iconImg.alt = 'cine';
  iconImg.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736263010/PopcornBCN/iconCine_ehyvp6.png';

  const divInfo = document.createElement('div');
  divInfo.classList.add('infoCine', 'flexCenter');
  const name = document.createElement('h3');
  name.innerText = cinema.name;

  const address = createAddress(cinema.address);

  const specialDayCont = document.createElement('div');
  specialDayCont.className = 'specialDay';
  const specialDayTitle = document.createElement('h4');

  specialDayTitle.innerText = 'DÍA DEL ESPECTADOR: ';

  specialDayCont.append(specialDayTitle);

  const specialDay = document.createElement('p');
  if (cinema.specialDay) {
    specialDay.innerText = cinema.specialDay;
    specialDayCont.append(specialDay);
  }

  const webLink = document.createElement('a');
  webLink.innerHTML =
    '<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1741638769/PopcornBCN/iraweb_a78sca.png" alt="ir a la web"/>Ir a la web';
  webLink.href = cinema.link;
  webLink.target = 'blank';
  webLink.className = 'flexCenter';

  divImg.append(iconImg);
  divInfo.append(name, address, specialDayCont);

  divCine.append(divImg, divInfo, webLink);

  //add button edit si eres admin
  const user = JSON.parse(localStorage.getItem('user')); //chequeo si el user es admin
  if (user && user.role === 'admin') {
    const editButt = createEditButt();
    editButt.addEventListener('click', () => {
      //llamo a la funcion createForm general, que llamarà a su vez getCinemaForm
      const form = createForm({
        funcion: getCinemaForm,
        element: cinema,
        title: 'Editar cinema'
      });
      form.classList.add('cineForm');
      document.querySelector('main').append(form);
      //añado el boton delete

      const deleteButt = createDeleteButt({
        textButt: 'cine',
        textConfirm: 'este cine',
        element: { cinema }
      });
      document.querySelector('.cineForm')?.append(deleteButt);
    });

    divCine.append(editButt);
  }

  return divCine;
};
