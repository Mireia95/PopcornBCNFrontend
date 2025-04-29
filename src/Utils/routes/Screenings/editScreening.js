import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayScreenings } from '../../../Components/sections/Screenings/Screenings';

import { API } from '../../API/API';

//funcion para editar un user
export const editScreening = async ({ screening, body, movie }) => {
  console.log('editScreening ejecutandose');
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await API({
    endpoint: `/screenings/${screening._id}`,
    method: 'PUT',
    body: body,
    isJson: true,
    token: token
  });

  if (response.screening) {
    const screnCont = document.querySelector('.screeningsContainer');
    document.querySelector('.screeningForm')?.remove(); //elimino el form
    //pinto el popup de confirmacion
    const popup = createConfirmPopup({
      texto: 'Sesión editada correctamente!',
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
