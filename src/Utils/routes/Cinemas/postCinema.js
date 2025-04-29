import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayCinemas } from '../../../Components/sections/Cinemas/CinemasList/CinemasList';
import { API } from '../../API/API';

//funcion para postar un screening, y pintar el popup de confirmacion
export const postCinema = async (body) => {
  const token = JSON.parse(localStorage.getItem('token'));

  const response = await API({
    endpoint: `/cinemas`,
    method: 'POST',
    token: token,
    body
  });

  if (response.cinema) {
    const cineSection = document.querySelector('#cinemas');
    document.querySelector('.cineForm')?.remove(); //elimino el form
    //pinto el popup de confirmacion
    const popup = createConfirmPopup({
      texto: 'Cine creado correctamente!',
      button: true,
      page: () => displayCinemas(cineSection)
    });
    cineSection.append(popup);
  } else {
    const cineForm = document.querySelector('.cineForm');
    displayErrorRequest({ father: cineForm, error: response.message });
  }

  return response;
};
