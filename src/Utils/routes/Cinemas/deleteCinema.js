import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayCinemas } from '../../../Components/sections/Cinemas/CinemasList/CinemasList';
import { API } from '../../API/API';

export const deleteCinema = async (cinema) => {
  const token = JSON.parse(localStorage.getItem('token'));
  //le paso el id del comment que quiero eliminar
  const res = await API({
    endpoint: `/cinemas/${cinema._id}`,
    method: 'DELETE',
    token: token
  });

  const fatherPopup = document.querySelector('.confirmDelete');

  if (res.deletedCinema) {
    console.log('eliminado');
    document.querySelector('.confirmDelete')?.remove();
    const cinemaSection = document.querySelector('#cinemas');
    document.querySelector('.cineForm')?.remove(); //elimino el form

    //pinto el popup de confirmacion
    const popup = createConfirmPopup({
      texto: 'Cine eliminado correctamente!',
      button: true,
      page: () => displayCinemas(cinemaSection)
    });
    cinemaSection.append(popup);
  } else {
    displayErrorRequest({ father: fatherPopup, error: res.message });
  }
};
