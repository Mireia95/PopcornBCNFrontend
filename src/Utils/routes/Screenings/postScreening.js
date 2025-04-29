import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayScreenings } from '../../../Components/sections/Screenings/Screenings';

import { API } from '../../API/API';

//funcion para postar un screening, y pintar el popup de confirmacion
export const postScreening = async ({ body, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));

  const response = await API({
    endpoint: `/screenings`,
    method: 'POST',
    token: token,
    body
  });

  if (response.screening) {
    const screnCont = document.querySelector('.screeningsContainer');
    document.querySelector('.screeningForm')?.remove(); //elimino el form
    //pinto el popup de confirmacion
    const popup = createConfirmPopup({
      texto: 'Sesión creada correctamente!',
      button: true,
      page: () => displayScreenings(movie)
    });
    screnCont.append(popup);
  } else {
    const screeningForm = document.querySelector('.screeningForm');
    displayErrorRequest({ father: screeningForm, error: response.message });
  }

  return response;
};
