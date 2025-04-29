import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayCinemas } from '../../../Components/sections/Cinemas/CinemasList/CinemasList';
import { API } from '../../API/API';

//funcion para editar un user
export const editCinema = async ({ cinema, body }) => {
  console.log('editCinema ejecutandose');
  const token = JSON.parse(localStorage.getItem('token'));

  const response = await API({
    endpoint: `/cinemas/${cinema._id}`,
    method: 'PUT',
    body: body,
    isJson: true,
    token: token
  });

  if (response.cinema) {
    const cinemaSection = document.querySelector('#cinemas');
    document.querySelector('.cineForm')?.remove(); //elimino el form
    //pinto el popup de confirmacion
    const popup = createConfirmPopup({
      texto: 'Cine editado correctamente!',
      button: true,
      page: () => displayCinemas(cinemaSection)
    });
    cinemaSection.append(popup);
  } else {
    const cineForm = document.querySelector('.cineForm');
    displayErrorRequest({ father: cineForm, error: response.message });
  }

  return response;
};
