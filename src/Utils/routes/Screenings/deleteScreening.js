import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayScreenings } from '../../../Components/sections/Screenings/Screenings';

import { API } from '../../API/API';

export const deleteScreening = async ({ screening, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));
  //le paso el id del comment que quiero eliminar
  const res = await API({
    endpoint: `/screenings/${screening._id}`,
    method: 'DELETE',
    token: token
  });

  const fatherPopup = document.querySelector('.confirmDelete');

  if (res.deletedScreening) {
    console.log('eliminado');
    document.querySelector('.confirmDelete')?.remove();
    const screnCont = document.querySelector('.screeningsContainer');
    document.querySelector('.screeningForm')?.remove(); //elimino el form

    const confirmPopup = createConfirmPopup({
      texto: 'Sesión eliminada correctamente!',
      button: true,
      page: () => displayScreenings(movie)
    });

    screnCont.append(confirmPopup);
  } else {
    displayErrorRequest({ father: fatherPopup, error: res.message });
  }
};
